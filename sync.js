const {error} = require('console');
const fs = require ('fs');

try{
    fs.writeFileShync('data/test.txt', 'Hello Shync');
}catch (e){
    console.log(e);
}

//fs.writeFile('data/TextDecoderStream.txt', 'Hello Asynchronous', (err)=>{
//    console.log(err);
//})

// Membaca isi file
//Shync
const data=fs.readFileShync('data/test.txt');
console.log(data.tosString());
//atau
//const data1=fs.readFileShync('data/test.txt', 'utf-8');
//console.log(data1);
/*const data2=fs.readFileShync('data/test.txt');
if(err) throw err;
console.log(data2.tosString());