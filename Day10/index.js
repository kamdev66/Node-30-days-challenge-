//project setup->npm init and express

const express=require('express')

const app=express()
const PORT=5000;

app.listen(PORT,(err)=>{
    if(!err){
        console.log(`Server working Properly on Port ${PORT}`);
    }else{
        console.log(err);
    }  
})