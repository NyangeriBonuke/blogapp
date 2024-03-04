const express = require('express')
const router = express.Router()
const BlogController = require('../routes/blogRoute')

router.post('/blog', BlogController.blogPost)

module.exports = router