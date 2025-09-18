/*const readln = require('readline');
const rl = readln.createInterface({
    input : process.stdin,
    output : process.stdout,

});

rl.question('masukan Nama Anda : ',
    (nama)=>{
        console.log(`Terimakasih ${nama}`);
        rl.close();
    }
);
*/

const readln = require('readline');
const rl = readln.createInterface({
  input : process.stdin,
 output : process.stdout,

});
rl.question('Masukan Nama Anda : ',(nama)=>{
    rl.question('Masukan No HP :' , (nohp)=>{
        console.log(`Terimakasih ${nama},${nohp}`);
    rl.close();
})
});
