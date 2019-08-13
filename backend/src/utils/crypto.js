const crypto = require('crypto');
require('dotenv').config()

const ENCRYPTION_KEY = "XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT"; //process.env.ENCRYPTION_KEY;
const IV_LENGTH = 16;

function encrypt(password) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = Cipheriv('aes-256-gcm', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(password);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(password) {
    let passwordParts = password.split(':');
    let iv = Buffer.from(passwordParts.shift(), 'hex');
    let encryptedPassword = Buffer.from(passwordParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedPassword);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
}


module.exports = {
    encrypt,
    decrypt,
};


const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash);
    });
});