const {User} = require('../services/dbService').models
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const JwtController = require('./jwtController')
class AuthController{
    async login(req, res, next){
        try{
            const user = await User.findOne({where: {email: req.body.email}})
            if (!user){
                res.json({error: 'user not found'})
               
            }else{
                
                if (bcrypt.compareSync(req.body.password, user.password)){
                    const token = JwtController.generateToken(user.id)
                    res.json({user, token:token})
                }
                else{
                    res.json({error: 'password incorrect'})
                }
                
            }
          
        }catch(error){
            res.json(error)
        }
    }
    async register(req, res, next){
        try{
            const password = await bcrypt.hash(req.body.password, 10)
            const user = await User.findOne({where: {email: req.body.email}})
            if (!user){
                req.body.password = password
                const newUser = await User.create(req.body)
                res.json(newUser)
            }else{
                res.json({error: 'user already exist'})
            }

        }catch(error){
            res.json(error)
        }
    }
    async auth(req, res, next){
        console.log(req.body)
        try{
            const userId = JwtController.getUserId(req.body.token)
            console.log(userId)
            debugger
            const user = await User.findOne({where: {id: userId}})
            if (!user){
                res.json({error: 'user not found'})
               
            }else{               
                res.json({user})               
            }
          
        }catch(error){
            res.json(error)
        }
    }
}
module.exports = new AuthController()