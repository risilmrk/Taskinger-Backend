const Task = require('../models/taskModel');
const Project = require('../models/projectModel');

const updateProjectType = async (projectId) => {
  try {
    const tasks = await Task.find({ project: projectId });

    let newStatus = 'not-started';

    if (!Array.isArray(tasks) || tasks.length === 0) {
      newStatus = 'not-started';
    } else if (tasks.every(task => task.finished === true)) {
      newStatus = 'completed';
    } else {
      newStatus = 'in-progress';
    }

    await Project.findByIdAndUpdate(projectId, { status: newStatus });
  } catch (err) {
    console.error('Error updating project type:', err.message);
  }
};

module.exports = { updateProjectType };
