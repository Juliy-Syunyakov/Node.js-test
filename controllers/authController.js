const {User} = require('../services/dbService').models
const Sequelize = require('sequelize')
class AuthController{
    async login(req, res, next){
        try{
           res.json(req.body)
        }catch(error){
            res.json(error)
        }
    }
    async register(req, res, next){
        try{
            const user = await User.findOne({where: {email: req.body.email}})
            if (!user){
                const newUser = await User.create(req.body)
                res.json(newUser)
            }else{
                res.json({error: 'user already exist'})
            }

        }catch(error){
            res.json(error)
        }
    }
}
module.exports = new AuthController()