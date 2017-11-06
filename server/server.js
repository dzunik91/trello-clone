require('dotenv').load()

const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const errorHandler = require('./middleware/error-handler')
const cors = require('cors')

const app = express()

app.use(express.static('../dist'))
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use('/api', routes)

app.use(errorHandler.showErrorMessage)

app.listen(process.env.PORT || 4567, () => {
  console.log(`It is alllllive and running on port: ${process.env.PORT}`)
})
