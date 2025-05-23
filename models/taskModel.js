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
    enum: ['Independent', 'Project'],
    default: 'Independent'
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    default: null
  },
  started: {
    type: Boolean,
    default: false,
  },
  finished: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



taskSchema.pre('remove', async function(next) {
  if (this.project) {
    await Project.updateOne(
      { _id: this.project },
      { $pull: { tasks: this._id } }
    );
  }
  next();
});


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
