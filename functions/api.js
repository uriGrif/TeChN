const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
require('dotenv').config();
const Project = require('./models/project')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
  res.send(`Hello Express!`)
})

// app.get('/prueba', (req, res) => {
//   const proj = new Project({
//     name: "Mongoose Test"
//   })

//   proj.save()
//     .then(result => {
//       res.send(result)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})