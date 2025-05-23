const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/taskController');

router
    .route('/')
    .get(taskController.getAllTasks)
    .post(taskController.addTask);

module.exports = router;
