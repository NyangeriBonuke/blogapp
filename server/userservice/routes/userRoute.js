const UserController = require('../controllers/userController')
const express = require('express')
const router = express.Router()

router.post('/signup', UserController.login)

module.exports = router