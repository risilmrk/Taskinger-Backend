const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/taskController');

router
  .route('/ind')
  .get(taskController.getIndTasks);
router
    .route('/:id/toggle-started')
    .patch(taskController.toggleStarted);
router
  .route('/')
  .get(taskController.getAllTasks)
  .post(taskController.addTask);

router
    .route('/pending')
    .get(taskController.getAllPending);
router
  .route('/:id/toggle-finished')
  .patch(taskController.toggleFinished);

router
  .route('/:id')
  .delete(taskController.deleteTask)
  .patch(taskController.updateTask)
  .get(taskController.getTask);


module.exports = router;