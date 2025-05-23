const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const projectRouter = require('./routes/projectRouter')
const taskRouter = require('./Routes/taskRouter')


const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/projects', projectRouter);

module.exports = app