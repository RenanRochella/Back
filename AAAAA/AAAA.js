const http = require('http')

//2 passo --> criar servidor
const myServer = http.createServer( (req,res)=>{
    console.log(req.url)

    if(req.url === '/login'){
        res.end(`<html>
        <h1>Email:</h1><br>
        <input type="email"><br><br>
        <h1>Senha:</h1><br>
        <input type="text"><br><br>
        <button>Logar</button>
        </html>`)
    }else if(req.url === '/img'){
        res.end(`<html>
        <img src="data:image/jpeg;base64,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" alt="">
        </html>`)
    }else if(req.url === '/vidiozin'){
        res.end(`<html>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vkJ5Lc0WwVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </html>`)
    }else {
        res.end(`<html>
        <h1>Erro 404, fudeu menó</h1>
        <img src="https://lojaintegrada.wpenginepowered.com/wp-content/uploads/2023/05/erro-404-1024x684.webp" alt="">
        </html>`)
    }
})


myServer.listen(2045,() =>{
    console.log('Sevidor no Ar....')
})