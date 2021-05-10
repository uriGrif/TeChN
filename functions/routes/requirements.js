const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Requirement = require('../models/requirement')

mongoose.set('useFindAndModify', false);

router.use(express.json())

router.get('/get', (req, res) => {
    const projId = req.body.projectId;
    Requirement.find({ projectId: projId })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
})

router.put('/update', (req, res) => {
    const requirementId = req.body.requirementId
    const newContent = req.body.content

    Requirement.findByIdAndUpdate(requirementId,
        {
            content: newContent
        })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router