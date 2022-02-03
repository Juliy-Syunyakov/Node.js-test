const express = require('express')
const app = express()
const port = 3000
//get: запрос на получение данных
//post: запрос на передачу данных
// req: данные от запроса
//res:обратная ссылка чтобы ответить на запрос
app.get('/', function (req,res){
    console.log('hello')
    res.send('text')
})
app.get('/account', function (req,res){
    console.log('account')
    res.send('<h1>account</h1>')
})
app.listen(port,()=>{
    console.log(`app listen http://localhost:${port}`)
})
