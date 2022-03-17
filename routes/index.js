const authRouter = require('./auth')
const deviceRouter = require('./device')
module.exports = (app)=>{
    app.use('/auth', authRouter)
    app.use('/device', deviceRouter)
}