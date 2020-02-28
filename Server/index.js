const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
       res.send (`Hola Hackademy desde Express hi! `)
    
})

app.listen ( port, err => {
if (err)
{
    return console.log('Ocurrio un error',err)
}

console.log (`http://localhost:${port}`)

})