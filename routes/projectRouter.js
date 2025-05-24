const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router
  .route('/')
  .get(projectController.getAllProjects)
  .post(projectController.addProject);

router
  .route('/:id')
  .patch(projectController.upateProject)
module.exports = router;
