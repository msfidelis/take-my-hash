'use strict';

const cryptojs = require("crypto-js");

const tmh = {
    AESEncrypt: (raw, key) => cryptojs.AES.encrypt(raw, key).toString(),
    AESDecrypt: (hash, key) => cryptojs.AES.decrypt(hash, key).toString(cryptojs.enc.Utf8)
};

module.exports = tmh;