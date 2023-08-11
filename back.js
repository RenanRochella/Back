console.log("Inicio!!!")

//HTTP (Verbos)
/* 
*GET
*POST
*
*
*
*
*
*/
//CRIAR SEVIDOR NODEjs
//1 passo - importar o http
const http = require('http')
//2 passo --> criar servidor
const nyServer = http.createServer( (req,res)=>{}  )
//Abrindo porta do servidor
nyServer.listen(8080,() =>{
    console.log('Sevidor no Ar....')
})






