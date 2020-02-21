const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const config = require('./config.js')

app.use(express.static(config.staticDir))
app.use(cors())

app.use(bodyParser.json({limit: '10mb', extended: true}))

app.get('/*', (req, res) => {
  res.sendFile(path.join(config.staticDir, 'index.html'))
})

module.exports = app