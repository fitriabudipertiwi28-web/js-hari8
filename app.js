const fs = require('fs');
const readln = require('readline');
const rl = readln.createInterface({
  input : process.stdin,
  output : process.stdout,
});

const dirpath = './data';
if (!fs.existsSync(dirpath)) {
  fs.mkdirSync(dirpath);
}

const datapath = './data/contacts.json';
if (!fs.existsSync(datapath)) {
  fs.writeFileSync(datapath, '[]', 'utf-8');
}

rl.question('Masukan Nama Anda : ', (nama) => {
  rl.question('Masukan Usia : ', (usia) => {
    rl.question('Masukan Hobi : ', (hobi) => {
      
      const newContact = { nama: nama, usia: usia, hobi: hobi }; 
      const file = fs.readFileSync(datapath, 'utf-8');
      const contacts = JSON.parse(file); 
      contacts.push(newContact); 

      fs.writeFileSync(datapath, JSON.stringify(contacts, null, 2));
      console.log(`Nuhun, data berhasil disimpan.`);

      rl.close();
    });
  });
});
