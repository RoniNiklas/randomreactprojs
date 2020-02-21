require('dotenv').config()
const path = require('path')

const staticDir = path.join(__dirname, '.', '../client/build')
const port = process.env.PORT || 5000

module.exports = {
  port,
  staticDir
}