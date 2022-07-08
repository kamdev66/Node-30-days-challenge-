const http=require('http');

const server=http.createServer((req,res)=>{
     res.writeHead(200,{"Content-Type": "text/plain"});
     res.write("Hello Kamdev")
     res.end('Server Close')
})

server.listen(5000,()=>{
    console.log("Server is started at Port 5000");
})