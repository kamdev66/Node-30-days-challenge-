//How to read command line argumenmts
//kaise hum command line se input le sakte hai
//hamare pass ek global object hai 'process' , hum isi se input lenge
//process ke andar hota h , argument vector(argv)
/*
console.log(process);   //ye object dega
console.log(process.argv); //ye hamari file ki current path de degi   //node index.js hellokamdev
console.log(process.argv[2]);  //node index.js hellokamdev

*/

/*
function add(a,b){
    return parseInt(a)+parseInt(b);
}

const sum=add(process.argv[3],process.argv[5])       //node index.js 10 5 45 gives 15  //node index.js 10 5 45 14 20 gives 19
console.log(sum);

*/

//ab hum filename ko command line  se input lenge , us nam ki file create krenge

const fs=require('fs');

fs.writeFile(process.argv[2],process.argv[3],(err)=>{
    if(err){
        throw err;
    }
    console.log('File created');
})
// node index.js demo.txt helloDev , ye demo.txt file bna kr, usme hellodev likh dega