//How to serve html file with express

const express=require('express')
const app=express()

app.use(express.static('public')) //ye ek middleware hai ,jisse humara style.css jo index.html se link hai, wo work karne lagega

app.get('/',(req,res)=>{
    console.log(__dirname); //ye current directory dega
    res.send('<h1>Hello Dev</h1>')
})

app.get('/page',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html") //maine index.html file me style.css bhi add kr rkha hai,lekin ye work nhi karegi, to iske liye hum "express.static" ka use karte hai
})

app.listen(5000,()=>{
    console.log(`Server started on 5000`);
})