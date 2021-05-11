const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
require('dotenv').config();

const projects = require('./routes/projects')
const tasks = require('./routes/tasks')
const ideas = require('./routes/ideas')
const informations = require('./routes/informations')
const requirements = require('./routes/requirements')
const useCases = require('./routes/useCases')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send(`Hello Express!`)
})

app.use('/projects', projects)
app.use('/tasks', tasks)
app.use('/ideas', ideas)
app.use('/information', informations)
app.use('/requirements', requirements)
app.use('/useCases', useCases)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})