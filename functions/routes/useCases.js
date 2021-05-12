const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const UseCase = require('../models/useCase')

mongoose.set('useFindAndModify', false);

router.use(express.json())

router.get('/get/:prId', (req, res) => {
    const projId = req.params.prId;
    UseCase.find({ projectId: projId })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
})

router.put('/update', (req, res) => {
    const useCaseId = req.body.textId
    const newContent = req.body.content

    UseCase.findByIdAndUpdate(useCaseId,
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