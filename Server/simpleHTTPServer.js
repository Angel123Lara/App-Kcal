const http = require ('http')
const port = 4000

const requestHandler=(request, response)=> {
    console.log("TCL: requestHandler -> request",request.url)
    response.end ('Hola amigos de Hackademy server!')
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
    if(err){
        return console.log ('algo malo esta pasando', err)
    }

    console.log('El servidor esta escuchando bajo el puerto '+ port)
}
)