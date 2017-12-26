const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')));// para ler o caminho dos arquivos

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/data",function(req,res){
    res.sendFile(__dirname + "/data.js");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
