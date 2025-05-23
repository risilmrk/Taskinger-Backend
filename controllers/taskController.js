const Task = require('../models/taskModel');
const Project = require('../models/projectModel')

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

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

exports.addTask = async (req, res) => {
  try {
    const { title, description, projectId } = req.body;

    // Find the related project if projectId is given
    let project = null;
    if (projectId) {
      project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ status: 'fail', message: 'Project not found.' });
      }
    }

    // Set type based on presence of project
    const type = project ? 'Project' : 'Independent';

    // Create and save task
    const newTask = await Task.create({
      title,
      description,
      type,
      fromProject: project ? project.title : null, // set fromProject if needed
      project: project ? project._id : null,
    });

    // Optionally, add the task to the project's tasks array
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


const deleteTask = async (req,res)=>{
   try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
}