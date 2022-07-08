//JSON:- javascript object Notation
//iska use server se data vejne me ,client  se koi data aa rha h tab
//ye language pr depend nhi krta hai,ye sabhi language me work krta hai
//ye key-value pair me hota hai
/*
Syntax:- Json object
{
    "name":"kamdev",
    "age":"18"
}

Syntax:- JSON Array
const JsonArr=[{
    "name":"kamdev",
    "age":"18"
},{
    "name":"kamdev",
    "age":"18"
}]
*/

//suppose, hum server se kisi data ko le rhe hain, to wo hamara string format me aa rha hoga,to hum use 'javascipt object' me convert krne ke liye jSON.parse() ka use krenge

/*
const str=`{
    "name":"kamdev",
    "age":18
}`
console.log(typeof(str));   //string

const obj=JSON.parse(str);  //json.parse() is used to convert the string into js object. 
console.log(typeof(obj));   //object

*/
//ye hamne dekha jab server se data le rhe hai to :- json.parse()

//ab hum dekhenge ki jab hame server ko data vejna hai to:- json.stringify()
/*

const obj={ //ye hamara simple object hai , ise hum json me convert krna chahte hai to
    name:"kamdev",
    age:"18"
}
console.log(typeof(obj));  //object
console.log(obj);   // { name: 'kamdev', age: '18' }

console.log(typeof(JSON.stringify(obj)));   //string
console.log(JSON.stringify(obj));   //{"name":"kamdev","age":"18"}

//json.stringify() is used to convert the object data into Json(string).
console.log(typeof(JSON)); 

*/

const data=require('./data.json') 

console.log(data);   // { menu: { id: 'file', value: 'File', popup: { menuitem: [Array] } } }

 