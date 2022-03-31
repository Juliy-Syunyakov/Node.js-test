const jwt = require('jsonwebtoken');
const key = 'meAEuX'

class JwtController{
    getUserId(token){
        console.log(token)
        const decoded = jwt.verify(token, key)
        return decoded.id
    }
    generateToken(userId){
        return jwt.sign({
            id:userId
        },key, {expiresIn: '1h'})
    }
    
}
module.exports = new JwtController()