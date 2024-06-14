// file-system.js
const fs = require('fs');

// Écrire dans le fichier
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Fichier créé et sauvegardé!');

  // Lire le fichier
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
