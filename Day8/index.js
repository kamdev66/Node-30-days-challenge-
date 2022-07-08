//nodemon tutorial

const http=require('http')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Hello Kamdev, how re u ? <h1>')
})

server.listen(5000,()=>{
    console.log('Server Started');
})