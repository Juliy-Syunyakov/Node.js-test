const net = require('net')
const port = 6006
const host = '127.0.0.1'
const server = net.createServer()
server.listen(port, host,()=>{
    console.log(`TCPServer runOn ${host}:${port}`)
})
module.exports = server