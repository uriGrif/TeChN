const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Task = require('../models/task')

mongoose.set('useFindAndModify', false);

router.use(express.json())

router.get('/get-all/:prId', (req, res) => {
    const projId = req.params.prId;
    Task.find({ projectId: projId })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/get-one/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    Task.findById(taskId)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/add', (req, res) => {
    const projId = req.body.projectId;
    const task = new Task(
        {
            title: req.body.title,
            description: req.body.description,
            state: req.body.state,
            projectId: mongoose.Types.ObjectId(projId)
        }
    )

    task.save()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            console.log(err)
        })
})

router.put('/edit', (req, res) => {
    const taskId = req.body.taskId
    const newTitle = req.body.title
    const newDescription = req.body.description
    const newState = req.body.state

    Task.findByIdAndUpdate(taskId,
        {
            title: newTitle,
            description: newDescription,
            state: newState
        })
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            console.log(err)
        })
})

router.delete('/delete', (req, res) => {
    const taskId = req.body.taskId;
    Task.findByIdAndDelete(taskId)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router