const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Project = require('../models/project')
const Information = require('../models/information')
const Requirement = require('../models/requirement')
const UseCase = require('../models/useCase')

router.use(express.json())

const defaultContent = {
    blocks: [
        {
            key: "si0j",
            text: "Click your text to start editing and click outside to get out of edit mode. Remember to save your work",
            type: "unstyled",
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {}
        }
    ],
    entityMap: {}
}

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
            const projId = result._id;
            const info = new Information(
                {
                    content: defaultContent,
                    projectId: mongoose.Types.ObjectId(projId)
                }
            )
            const requirement = new Requirement(
                {
                    content: defaultContent,
                    projectId: mongoose.Types.ObjectId(projId)
                }
            )
            const useCase = new UseCase(
                {
                    content: defaultContent,
                    projectId: mongoose.Types.ObjectId(projId)
                }
            )
            info.save().catch(err => console.log(err))
            requirement.save().catch(err => console.log(err))
            useCase.save().catch(err => console.log(err))
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router