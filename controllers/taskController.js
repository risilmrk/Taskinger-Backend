const Task = require('../models/taskModel');

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
    const type = project ? 'Project' : 'Independent';

    const newTask = new Task({
      title,
      description,
      type,
      project: project ? project._id : null,
    });
    res.status(201).json({
      status: 'success',
      data: {
        newTask,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid input data.',
    });
  }
};
