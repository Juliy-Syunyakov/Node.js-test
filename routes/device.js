const router = require('express').Router()
const deviceController = require('../controllers/deviceController')
const deviceValidation = require('../validation/device')
router.post('/create', deviceValidation.create, deviceController.create)


module.exports = router