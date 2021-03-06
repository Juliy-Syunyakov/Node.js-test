const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
let card = 45
app.use(cors())
app.use(bodyParser.json())
const dbService = require('./services/dbService')
const TCPController = require('./controllers/TCPController')
const templates = {
    index:path.join(__dirname,'templates','index.html'),
    account:path.join(__dirname,'templates','account.html'),
    market:path.join(__dirname,'templates','market.html')
}
console.log(templates)
//get: запрос на получение данных
//post: запрос на передачу данных
// req: данные от запроса
//res:обратная ссылка чтобы ответить на запрос
/*app.get('/', function (req,res){
    console.log('hello')
    res.sendFile(templates.index)
})
app.get('/account', function (req,res){
    console.log('account')
    res.sendFile(templates.account)

})
app.get('/market', function (req,res){
    console.log('market')
    res.sendFile(templates.market)

})
app.get('/shop', function (req, res){
    console.log('shop')
    res.send('<ol><li>Games</li><li>Toys</li> </ol>')
})
app.get('/card', function (req, res){
    console.log('card')
    res.send(`Ваш баланс:${card}руб`)
})
app.post('/login', (req, res, next)=>{
    console.log(req.body)
    res.send({login: 'sucsses'})
})*/
require('./routes')(app)
app.listen(port,()=>{
    console.log(`app listen http://localhost:${port}`)
})
