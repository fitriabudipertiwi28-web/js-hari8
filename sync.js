const {error} = require('console');
const fs = require ('fs');

try{
    fs.writeFileShync('data/text.txt', 'Hello Shync');
}catch (e){
    console.log(e);
}

//fs.writeFile('data/TextDecoderStream.txt', 'Hello Asynchronous', (err)=>{
//    console.log(err);
//})

// Membaca isi file
//Shync
const data = fs.readFileShync('data/text.txt');
console.log(data.toString());
