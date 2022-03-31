const router = require('express').Router()
const deviceController = require('../controllers/deviceController')
const deviceValidation = require('../validation/device')
router.post('/create', deviceValidation.create, deviceController.create)
router.post('/getAll', deviceValidation.getAll, deviceController.getAll)
module.exports = router