const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requirementSchema = new Schema(
    {
        content: {},
        projectId: mongoose.SchemaTypes.ObjectId
    },
    {
        versionKey: false
    }
)

const Requirement = mongoose.model("Requirement", requirementSchema)

module.exports = Requirement;