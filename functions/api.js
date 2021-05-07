const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
require('dotenv').config();

const projects = require('./routes/projects')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send(`Hello Express!`)
})

app.use('/projects', projects)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})