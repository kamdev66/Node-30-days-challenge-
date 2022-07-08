const express=require('express')
const app=express();
const PORT=5000;

app.get('/',(req,res)=>{
    res.send('Hello World!!!!')      //res.send se hum user ko response send kr skte hai
})

app.get('/about',(req,res)=>{
    res.send('ABOUT SECTION')
})

app.listen(PORT,()=>{
    console.log(`Server Working Properly on Port ${PORT}`);
})