const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ideaSchema = new Schema(
    {
        text: String,
        projectId: mongoose.SchemaTypes.ObjectId
    },
    {
        versionKey: false
    }
)

const Idea = mongoose.model("Idea", ideaSchema)

module.exports = Idea;