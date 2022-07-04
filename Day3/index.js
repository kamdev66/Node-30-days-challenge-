/*File System Nodejs mmodule */

const fs=require('fs');

/*//writeFile ye sync hai agar aapko async use karna hai to writeFileSync use kare
fs.writeFile('demo.txt',"Hello Coding Monks",(err)=>{
    if(err){
        throw err;
    }
    console.log('file created');
})
*/

/*
//readFile
fs.readFile('demo.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
})
*/

/*
//appendFile->pahle wala content bhi rahega file me,aur jo add krenge wo bhi(demo.txt file me mai i am kamdev add kr rha hu)
fs.appendFile('demo.txt ',' I am Kamdev2',(err,data)=>{
  if(err){
    throw err;
  }
  console.log('done');
})

*/

/*
 //rename file name
fs.rename('demo.txt','newFile.txt',(err)=>{
    if(err){
        throw err;
    }

    console.log('renamed');
})
*/

//delete file
fs.unlink('newFile.txt',(err)=>{
    if(err){
        throw err;
    }
    console.log('File deleted');
})