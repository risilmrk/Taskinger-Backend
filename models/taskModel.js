const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  catogery: {
    type: String,
    enum: ['Project', 'Entertainment', 'Business', 'Work', 'Personal'],
    default: 'Personal',
  },
  description: {
    type: String,
    maxlength: [40, 'A description must have less or equal than 40 characters'],
  },
  type: {
    type: String,
    enum: ['none', 'Project'],
    default: 'none',
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    default: null,
  },
  started: {
    type: Boolean,
    default: false,
  },
  finished: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['pending', 'notStarted', 'completed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

taskSchema.pre('remove', async function (next) {
  if (this.project) {
    await Project.updateOne(
      { _id: this.project },
      { $pull: { tasks: this._id } }
    );
  }
  next();
});

taskSchema.pre('save', function (next) {
  if (!this.finished && this.started) {
    this.status = 'pending';
  } else if (!this.finished && !this.started) {
    this.status = 'not started';
  } else if(this.finished) {
    this.status = 'completed';
  }
  next();
});



const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
