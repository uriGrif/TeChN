const express = require('express')
const router = express.Router()
const Project = require('../models/project')

router.use(express.json())

router.get('/', (req, res) => {
    Project.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/add', (req, res) => {
    const proj = new Project(
        {
            name: req.body.name
        }
    )

    proj.save()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router