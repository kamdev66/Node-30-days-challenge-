//How to call API from Nodejs
//pahle hum browser se request kar rahe the ,aur node server hame data de raha tha 
//is video me hum dekhenge ki browser se request krenge node application par aur node application ka jo server hai wo kisi dusre server par request krega aur waha se hamara data aayega
//isme hum open weather map api ka use krenge
const express = require('express')
const app = express()
const https=require('https')  //isi ki help se res vejenge abhi,axios ke baare me bad me padhenge
const port = 5000

app.get('/', (req, res) => {
    const URL="https://api.openweathermap.org/data/2.5/weather?q=Jalandhar&appid=c412e32f8374f6a87ce341d095a159f6&units=metric"
    https.get(URL,function(response){
        //console.log(response.statusCode);
        response.on("data",(data)=>{
            console.log(data); //ye abhi buffer me data ko de rha hai, json me convert krne k liye json.parse() ka use krenge
        const weatherData=JSON.parse(data);
        console.log(weatherData);  //ye json me data de rha hai bcoz of json.parse()

        const mainTemp=weatherData.main.temp;
        res.write(`<h1>Temperature :- ${mainTemp}</h1>`)
        res.send();// isme agar data send krenge to ,ye ek bar hi send kr ke usko end kr dega
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))