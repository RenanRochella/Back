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
const myServer = http.createServer( (req,res)=>{
    console.log(req.url)

    if(req.url === '/products'){
        console.log("Mostrando produtos")
    }else if(req.url === '/save'){
        console.log("Salvando Produtos")
    }else if(req.url === '/delete'){
        console.log("Deletando produtos")
    }else {
        console.log("Não conheço")
    }
})
//Abrindo porta do servidor

myServer.listen(8080,() =>{
    console.log('Sevidor no Ar....')
})






