const mongoose = require('mongoose')
const Schema = mongoose.Schema

const informationSchema = new Schema(
    {
        content: {},
        projectId: mongoose.SchemaTypes.ObjectId
    },
    {
        versionKey: false
    }
)

const Information = mongoose.model("Information", informationSchema)

module.exports = Information;