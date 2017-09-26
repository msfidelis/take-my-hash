"use strict";

const tmh = require("../lib/take-my-hash");

const expect = require("chai").expect;
const assert = require("chai").assert;

const mockTxt = "yabadabadoo";
const mockKey = "123123";


describe("#Crypto Test", () => {

  it("#AES Encrypt/Decrypt", () => {

    let AESHash = tmh.AESEncrypt(mockTxt, mockKey);
    expect(AESHash).to.be.a('string');

    let AESRaw = tmh.AESDecrypt(AESHash, mockKey);
    expect(AESRaw).to.be.a('string');
    expect(AESRaw).to.be.equal(mockTxt);

  });


});
