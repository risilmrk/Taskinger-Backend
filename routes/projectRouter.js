const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router
  .route('/')
  .get(projectController.getAllProjects)
  .post(projectController.addProject);

router
  .route('/:id')
  .get(projectController.getProject)
  .patch(projectController.updateProject)
module.exports = router;
