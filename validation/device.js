const joi = require('joi')
const valid = require('./index')
module.exports = {
    async create(req,res,next){
        const schema = joi.object({
            name: valid.name,
            serialNumber: valid.serialNumber,
            token:valid.token
        })
        const {error} = schema.validate(req.body)
        if (error){
            res.status(400).send({error: error.message})
        }else{
            next()
        }
    },
    async getAll(req,res,next){
        const schema = joi.object({
            token:valid.token
        })
        const {error} = schema.validate(req.body)
        if (error){
            res.status(400).send({error: error.message})
        }else{
            next()
        }
    },

}