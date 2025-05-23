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
    .get(taskController.getTask)
    
router
    .route('/ind')
    .get(taskController.getIndTasks)

module.exports = router;
