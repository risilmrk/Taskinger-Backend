const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/taskController');

router
    .route('/')
    .get(taskController.getAllTasks)
    .post(taskController.addTask);
router
    .route('/:id')
    .delete(taskController.deleteTask)

router
    .route('/ind')
    .get(taskController.getIndTasks)

module.exports = router;
