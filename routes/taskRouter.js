const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router
.route('/')
.get(taskController.getAllTasks)
.post(taskController.addTask);

router
  .route('/:id')
  .delete(taskController.deleteTask)
  .patch(taskController.updateTask)
  .get(taskController.getTask);

router
    .route('/:id/toggle-started')
    .patch(taskController.toggleStarted);

router
  .route('/:id/toggle-finished')
  .patch(taskController.toggleFinished);



module.exports = router;