//practical use of event

const express=require('express')
const app=express()
const EventEmitter=require('events')
const event=new EventEmitter()
const PORT=5000;

//handle events
let count=0;
event.on('apiCount',()=>{
    count++;
    console.log("API Count :- " , count);
})


app.get('/',(req,res)=>{
    res.send('Hello World!!!!')      //res.send se hum user ko response send kr skte hai
    
    //yaha hum count krenge ki kitni baar api ka endpoint hit hua hai
    event.emit('apiCount')  //generate event
})


app.listen(PORT,()=>{
    console.log(`Server Working Properly on Port ${PORT}`);
})