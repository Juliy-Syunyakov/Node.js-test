const net = require('net')
let device = null
const {DeviceData} = require('../services/dbService').models
const TCPHelper = require('./TCPHelper')
const port = 6007
const host = 'localhost'
const server = net.createServer()
const deviceController = require('./deviceController')
const parserService = require('../services/parserService')
let connections = []
server.listen(port, ()=>{
    console.log(`TCPServer runOn ${host}:${port}`)
})
server.on('connection', (stream)=>{
    //stream.write(TCPHelper.get_serial_number)
    console.log(`Connected ${stream.remoteAddress}:${stream.remotePort}`)
    connections.push(stream)
    /*setTimeout(()=>{
        stream.write("Hello from server")
    }, 5000)*/
    stream.on('data', async (data)=>{
        const str_data = `${data}`
        console.log(str_data)
        
        if (str_data.indexOf(TCPHelper.omega_descriptor) >= 0){
            const sn = str_data.substring(13, 15)
            device = await deviceController.getDeviceBySerialNumber(sn)
            console.log('is M2')
            console.log(device)
            console.log(str_data.substring(13, 15))
        }
        else{
            return
            const parsedData = parserService.parseCommand(str_data)
            console.log(parsedData)
            const newState = await DeviceData.create({
                data: JSON.stringify(parsedData),
                DeviceId:device.id
            })
        }
        console.log(`${data}`)
    })
    stream.on('close', (data)=>{
        const index = connections.findIndex(s=>{
            return s.remoteAddress === stream.remoteAddress && s.remotePort === stream.remotePort
        })
        if (index != -1){
            connections.splice(index, 1)
        }
        console.log(`Connection closed ${stream.remoteAddress}:${stream.remotePort}`)
    })
    stream.on('error', (data)=>{
        console.log(data)
    })
})
module.exports = server
