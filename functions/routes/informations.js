const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Information = require('../models/information')

mongoose.set('useFindAndModify', false);

router.use(express.json())

router.get('/get/:prId', (req, res) => {
    const projId = req.params.prId;
    Information.find({ projectId: projId })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
})

router.put('/update', (req, res) => {
    const informationId = req.body.informationId
    const newContent = req.body.content

    Information.findByIdAndUpdate(informationId,
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