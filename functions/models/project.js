const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema(
    {
        name: String
    },
    {
        versionKey: false
    }
)

const Project = mongoose.model("Project", projectSchema)

module.exports = Project;