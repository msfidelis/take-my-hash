"use strict";

const tmh = require("../lib/take-my-hash");

const Lab = require("lab");
const lab = (exports.lab = Lab.script());

const suite = lab.suite;
const test = lab.test;

const expect = require("chai").expect;
const assert = require("chai").assert;

const mockTxt = "yabadabadoo";
const mockKey = "123123";


suite("#Crypto Test", () => {
  test("AES Encrypt/Decrypt", done => {

    let AESHash = tmh.AESEncrypt(mockTxt, mockKey);
    expect(AESHash).to.be.a('string');

    let AESRaw = tmh.AESDecrypt(AESHash, mockKey);
    expect(AESRaw).to.be.a('string');
    expect(AESRaw).to.be.equal(mockTxt);

    done();
  });
});
