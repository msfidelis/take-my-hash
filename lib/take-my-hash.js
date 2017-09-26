'use strict';

const cryptojs = require("crypto-js");

const tmh = {
    AESEncrypt: (raw, key) => cryptojs.AES.encrypt(raw, key).toString(),
    AESDecrypt: (hash, key) => cryptojs.AES.decrypt(hash, key).toString(cryptojs.enc.Utf8),

    //SHA Algs
    sha1: raw => cryptojs.SHA1(raw).toString(cryptojs.enc.Hex),
    sha3: raw => cryptojs.SHA3(raw).toString(cryptojs.enc.Hex),
    sha224: raw => cryptojs.SHA224(raw).toString(cryptojs.enc.Hex),
    sha256: raw => cryptojs.SHA256(raw).toString(cryptojs.enc.Hex),
    sha384: raw => cryptojs.SHA384(raw).toString(cryptojs.enc.Hex),
    sha512: raw => cryptojs.SHA512(raw).toString(cryptojs.enc.Hex),
};

module.exports = tmh;