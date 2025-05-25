const  mongoose  = require("mongoose")

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        maxlength: [20, 'A title must have less or equal than 20 characters'],
    },
    description: {
        type: String,
        maxlength: [40, 'A description must have less or equal than 40 characters'],
    },
    status: {
        type: String,
        enum: ['in-progress', 'not-started', 'completed'],
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Task'
    }],
    deadLine: {
        type: Date
    }
})

const Project = mongoose.model('Project',projectSchema)

module.exports = Project 