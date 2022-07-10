//isme hum views folder ke andar ka structure dekhenge
/*
    views
       1.partials :- jo bhi hamara reusable code hoga hamara,hum use partials ke andar rakhenge
       2.pages :-jo chije dynamic change kr rahi hogi,use hum pages ke andar rakhene

*/
const express = require('express')
const app = express()
const port = 5000
app.set('view engine','ejs') //app.set se hum bta rahe ki hum kya use kar rhe hai, first parameter is:- kum kya use kr rhe h , second is :- jo use ke rhe uska naam

const user={
    fname:"Kamdev",
    lname:"Kumar",
    admin:true
}
app.get('/', (req,res)=>{
    res.render('./pages/index',{user:user})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))