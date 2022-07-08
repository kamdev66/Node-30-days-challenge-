//POST REQUEST

const express=require('express')
const app=express()
const bodyParser=require('body-parser') //ye hum post request ke liye use karte hai
app.use(bodyParser.urlencoded({extended:true}))  //ye ek middleware hai jo post request ko handle karne ke liye use kiya jata hai, jo bhi hamara body url aayega usko ye parse kr dega
const PORT=5000;

app.get('/',(req,res)=>{    //get se humlog server se data lete hai
    res.sendFile(__dirname+"/index.html")
})

app.post('/',(req,res)=>{  //post se humlog server ko data vejte hai
    console.log(req.body);
    var num1=Number(req.body.num1);  //hamne html form me number1 ko name=num1 diya hai,isliye yaha req.body.num1 likhna pada
    var num2=Number(req.body.num2);  

    var result=num1+num2;
    console.log(result);
    res.send("Answer :- "+ result)
})

app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`);
})   