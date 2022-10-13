const express = require('express')

const router = express.Router()

const userController = require('../controllers/user')

router.post('/postSubmitForm', userController.postSubmitForm)

module.exports = router