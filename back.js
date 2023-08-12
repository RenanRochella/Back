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

        res.end("<h1>Mostrando produtos</>")
    }else if(req.url === '/save'){
        res.end('<html><img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fnoticias%2F2014%2F11%2F06%2Fum-recurso-do-whatsapp-que-identifica-quando-a-mensagem-foi-lida-pelo-destinatario-virou-polemica-entre-os-usuarios-e-acabou-se-transformando-em-piada-segundo-alguns-comentarios-a-funcionalidade-vai-1415279363911_v2_956x500.jpg&tbnid=ydVAApD_lvGO2M&vet=12ahUKEwjGidjH5dWAAxXnp5UCHTj0BrMQMygcegQIARB2..i&imgrefurl=https%3A%2F%2Fwww.uol.com.br%2Ftilt%2Fnoticias%2Fredacao%2F2022%2F04%2F17%2Fver-mensagem-no-whatsapp-e-nao-responder-e-muito-feio-qual-e-a-etiqueta.htm&docid=iSJezp54rFbkwM&w=956&h=500&q=ela%20t%C3%A1%20sem%20zap&client=opera-gx&ved=2ahUKEwjGidjH5dWAAxXnp5UCHTj0BrMQMygcegQIARB2" alt=""></html>')
    }else if(req.url === '/delete'){
        console.log("Deletando produtos")
    }else if(req.url === '/maca'){
        res.end(`
        <html>
        <button>Clique!!!</button>
        <html/>`)
    }else {
        console.log("Não conheço")
    }
})
//Abrindo porta do servidor

myServer.listen(8080,() =>{
    console.log('Sevidor no Ar....')
})






