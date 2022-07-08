const http=require('http');
const fs=require('fs')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'})  //yaha agar json vejna ho to {'Content-Type': 'application/json'}
    fs.readFile('index.html',(err,data)=>{
        if(err){
            throw err;
        }
        res.end(data);                              //res.end(JSON.stringify(data))
    })
})

server.listen(5000,()=>{
console.log('Server started at 5000');
})