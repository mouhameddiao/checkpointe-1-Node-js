// email-sender.js
const nodemailer = require('nodemailer');

// Remplacez par vos informations de configuration de mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre-email@gmail.com',
    pass: 'votre-mot-de-passe'
  }
});

const mailOptions = {
  from: 'votre-email@gmail.com',
  to: 'destinataire@gmail.com',
  subject: 'Test Email de Node.js',
  text: 'Ceci est un email de test envoyé depuis un script Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email envoyé: ' + info.response);
});
