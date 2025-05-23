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

exports.addTask = async(req,res)=>{
     const newTask = await Task.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newTask
      }
    })
}