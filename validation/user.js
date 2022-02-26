const joi = require('joi')
const valid = require('./index')
module.exports = {
    async login(req,res,next){
        const schema = joi.object({
            email: valid.email,
            password: valid.password
        })
        const {error} = schema.validate(req.body)
        if (error){
            res.status(400).send({error: error.message})
        }else{
            next()
        }
    },
    async register(req,res,next){
        const schema = joi.object({
            email: valid.email,
            password: valid.password,
            name: valid.name
        })
        const {error} = schema.validate(req.body)
        if (error){
            res.status(400).send({error: error.message})
        }else{
            next()
        }
    }
}