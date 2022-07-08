//BMI CALCULATOR

const express=require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
const PORT=5000;

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/bmi',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post('/bmi',(req,res)=>{
    console.log(req.body);
    h=parseFloat(req.body.Height);
    w=parseFloat(req.body.Weight);
    bmi=w/(h*h)  //formula to calculate bmi
    bmi=bmi.toFixed() //ise hum string me convert krenge
    req_name=req.body.Name;
    res.send(`<h1> Hey ! ${req_name}, Your BMI around :- ${bmi}`)
})

app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`);
})   