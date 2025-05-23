const express = require('express');
const router = express.Router();
const taskController = require('../controllers/projectController');

router
  .route('/')
  .get(taskController.getAllProjects)
  .post(taskController.addProject);

module.exports = router;
