const Task = require('../models/taskModel');
const Project = require('../models/projectModel');
const apiFeature = require('../utils/apiFeature');
const {updateProjectType} = require('../utils/projectUtils')

exports.getAllTasks = async (req, res) => {
  try {
    const features = new apiFeature(Task.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()

    const tasks = await features.query;

    res.status(200).json({
      status: 'success',
      results: tasks.length,
      data: {
        tasks,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    //verify
    if (!task) {
      return res.status(404).json({
        status: 'fail',
        message: 'Task not found',
      });
    }

    res.status(200).json({
      status: 'success',
      task,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.addTask = async (req, res) => {
  try {
    const { title, description, projectId } = req.body;

    // Find the project if projectId is given
    let project = null;
    if (projectId) {
      project = await Project.findById(projectId);
      if (!project) {
        return res
          .status(404)
          .json({ status: 'fail', message: 'Project not found.' });
      }
    }

    // Set type based on project
    const type = project ? 'Project' : 'none';

    // Create and save task
    const newTask = await Task.create({
      title,
      description,
      type,
      fromProject: project ? project.title : null,
      project: project ? project._id : null,
    });

    // add the task to the project's tasks array
    if (project) {
      project.tasks.push(newTask._id);
      await project.save();
    }

    res.status(201).json({
      status: 'success',
      data: {
        newTask,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message || 'Invalid input data.',
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      status: 'success',
      task,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.toggleStarted = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        status: 'fail',
        message: 'Task not found',
      });
    }

    task.started = !task.started;

    // Save the task to apply changes and trigger pre-save hook
    await task.save();

    await updateProjectType(task.project)

    res.status(200).json({
      status: 'success',
      task,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.toggleFinished = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        status: 'fail',
        message: 'Task not found',
      });
    }

    task.finished = !task.finished;

    await task.save();
    res.status(200).json({
      status: 'succcess',
      task,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
