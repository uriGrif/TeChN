const mongoose = require('mongoose')
const Schema = mongoose.Schema

const useCaseSchema = new Schema(
    {
        content: {},
        projectId: mongoose.SchemaTypes.ObjectId
    },
    {
        versionKey: false
    }
)

const UseCase = mongoose.model("UseCase", useCaseSchema)

module.exports = UseCase;