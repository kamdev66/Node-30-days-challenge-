//How to use ejs template engine with express()
//:- static code ko dynamic bnane k liye template engine ka use krte hai
/*
steps to use ejs:- 
1. npm i ejs
2. app.set('view engine', 'ejs')
3. create a folder named 'views'
4. in views folder, create a file named .ejs extension
5. then, use res.render for rendering //render automatically profile page ko render kr dega ,bas hame us file ka naam dena

*/
const express = require('express')
const app = express()
const port = 5000
app.set('view engine','ejs') //app.set se hum bta rahe ki hum kya use kar rhe hai, first parameter is:- kum kya use kr rhe h , second is :- jo use ke rhe uska naam

app.get('/', (req, res) => res.send('Hello World!'))

//for dynamic file 
const user={
    name:"kamdev",
    email:"test@gmail.com"
}

app.get('/profile',(req,res)=>{
   res.render('profile',{user}) //humne user ko profile me pass kr diya hai
})

app.get('/about',(req,res)=>{
    res.render('about')
 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))