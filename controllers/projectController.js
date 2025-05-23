const Project = require('../models/projectModel');
const Task = require('../models/taskModel');

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find();

  res.status(200).json({
    status: 'success',
    results: projects.length,
    projects: {
      projects,
    },
  });
};
exports.addProject = async (req, res) => {
    // You are creating a Task instead of a Project. Should be Project.create
    const newProject = await Project.create(req.body);

    res.status(200).json({
        status: 'success',
        newProject
    });
};
