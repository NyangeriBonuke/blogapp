const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/userRoute')
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/bloguser')
.then(() => {
    console.log('Connected to mongodb')
})
.catch((error) => {
    console.log(`Mongodb error ${error}`)
})

app.use(express.json())
app.use(cors())

app.use('/api', router)

app.listen('8002', () => {
    console.log('Server on port 8002')
})