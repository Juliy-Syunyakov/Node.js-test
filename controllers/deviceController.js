const {User, Device, DeviceData} = require('../services/dbService').models
const res = require('express/lib/response')
const Sequelize = require('sequelize')
const {Op} = require('sequelize')
const JwtController = require('./jwtController')
//#DIVISION_M2#861774052859087#17#00000#00000#00000##9896100474#

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
    async getAll(req, res, next){
        try{
            const userId = JwtController.getUserId(req.body.token)
            const devices = await Device.findAll({where: {UserId: userId}})
            res.json(devices)
            

        }catch(error){
            res.json(error)
        }
    }
    async getDeviceBySerialNumber(serial_number){
        try{
          
            const devices = await Device.findOne({where: {serial_number:serial_number}})
            return(devices)
            

        }catch(error){
            return(error)
        }
    }
    async getDeviceData(req, res){
        try{
            console.log(req.body.date)
  /*          const data = await DeviceData.findAll({where:{DeviceId: id, createdAt: {
                [Op.gte]:moment().sub
            }}})*/
            const data = await DeviceData.findAll({where:{DeviceId: req.body.DeviceId,
                createdAt:{
                    [Op.lt]:new Date(`${req.body.date.substring(0,10)} 23:59:59.339 +0300`),
                    [Op.gt]:new Date(`${req.body.date.substring(0,10)} 00:00:00.339 +0300`)
                }
               
            }})
            const sortData = data.filter(dt=>{
                return JSON.parse(dt.data).type == req.body.sensorType
            })
            
            res.json(sortData)
        }catch(error){
            res.json(error)
            console.log(error)
        }
    }
}
module.exports = new DeviceController()