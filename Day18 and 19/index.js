//How to build a Simple API with node and express

const express=require('express')
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
const PORT=5000;

let bookList=[
    'javascript',
    'python'
]

app.get('/',(req,res)=>{
    res.send("Home")
})

app.get('/book',(req,res)=>{
    return res.json({allBook:bookList}) //qki hame json data vejna hai isliye res.json
})

app.post('/book',(req,res)=>{  //qki hum post kr rhe hai isliye hame bodyparser ka use karna hoga,like:- app.use(bodyParser.urlencoded({extended:true}))
      const bookname=req.body.name;
      if(bookList.includes(bookname)){
        return res.json({Success: false})
      }
      bookList.push(bookname)
      return res.json({Success:true})
})


app.delete('/book',(req,res)=>{
    const bookToDelete=req.body.name;
    bookList=bookList.filter((book)=>book !== bookToDelete)

    return res.json({allBook:bookList})
})


app.put('/book',(req,res)=>{
    const bookToUpdate=req.body.name;
    const updatedBook=req.body.updatedName;

    const bookIndex=bookList.findIndex((book)=>book===bookToUpdate)

    if(bookIndex===-1){
        return res.json({success:false})
    }
    bookList[bookIndex]=updatedBook

    return res.json({success: true})
})

app.listen(PORT,()=>{
    console.log(`Server is running at Port ${PORT}`);
})