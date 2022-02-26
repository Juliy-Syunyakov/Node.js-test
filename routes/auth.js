const router = require('express').Router()
const authController = require('../controllers/authController')
const userValidation = require('../validation/user')
router.post('/login', userValidation.login, authController.login)
router.post('/register', userValidation.register, authController.register)

module.exports = router