const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/blogRoute')
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/blogpost')
.then(() => {
    console.log("Connected to mongodb")
})
.catch((error) => {
    console.log(`mongodberror: ${error}`)
})

app.use(express.json())
app.use(cors())

app.use('/api', router)

app.listen('8001', () => {
    console.log("Listening on port 8001")
})