const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
        title: String,
        description: String,
        state: String,
        projectId: mongoose.SchemaTypes.ObjectId
    },
    {
        versionKey: false
    }
)

const Task = mongoose.model("Task", taskSchema)

module.exports = Task;