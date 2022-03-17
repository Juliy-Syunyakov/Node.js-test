const {User, Device} = require('../services/dbService').models
const Sequelize = require('sequelize')
const JwtController = require('./jwtController')
class DeviceController{
   
    async create(req, res, next){
        try{
            const device = await Device.findOne({where: {serial_number: req.body.serialNumber}})
            const userId = JwtController.getUserId(req.body.token)
            if (!device){
                const newDevice = await Device.create({
                    serial_number: req.body.serialNumber,
                    name:req.body.name,
                    UserId:userId
                })
                res.json(newDevice)
            }else{
                res.json({error: 'device already exist'})
            }

        }catch(error){
            res.json(error)
        }
    }
}
module.exports = new DeviceController()