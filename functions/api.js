const express = require('express')
const app = express()
const port = 8000
require('dotenv').config();

app.get('/', (req, res) => {
  res.send(`Hello Express! ${process.env.DB_USER}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})