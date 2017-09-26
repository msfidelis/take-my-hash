"use strict";

const tmh = require("../lib/take-my-hash");

const expect = require("chai").expect;
const assert = require("chai").assert;

const mockTxt = "yabadabadoo";
const mockKey = "123123";

const mockMD5 = "f79fc78d5c60342810cbde0bbebb4f08";

const mochaSHA1 = "df3acb4fee67da09bdb54dca8227674396c84da9";
const mockSHA224 = "d91a3ff3c03478029837ba389051df0caae1e5ef1654d9ed053f835d";
const mockSHA256 = "999f36dd648c74f52972745be2ee94c4b53c48639debbf310bfd5d5fc84ee4f6";
const mockSHA384 = "5bd7ee3a828f7f7b4859aebccabbdfc69715a1c515e2c44459b806c9308681ee6d2d603323f4199b5b60d50c0d5452c7";
const mockSHA3 = "f0104d57425d93843f4f2052e3b8be001389481bf28c0e9efb84eaba6ec1af2fd9b472c3485420aa183d3424412d723f5a5b818498d170e904ab1f766bc0a299";
const mockSHA512 = "ab685e73a1ee7fa7b0f04ee296e80bcd4d6b865136998efb0aca2586bc22560e43fb8b2fd8c210760a34e4eba5e5ebbd10569db1a8009a21e997a5afe9a3f804";


describe("#Crypto Test", () => {

  it("#AES Encrypt/Decrypt", () => {

    let AESHash = tmh.AESEncrypt(mockTxt, mockKey);
    expect(AESHash).to.be.a('string');

    let AESRaw = tmh.AESDecrypt(AESHash, mockKey);
    expect(AESRaw).to.be.a('string');
    expect(AESRaw).to.be.equal(mockTxt);

  });

  it("#MD5", () => {
    
    let hash = tmh.md5(mockTxt);
    expect(hash).to.be.a('string');
    expect(hash).to.be.equal(mockMD5);
    
  });

  it("#SHA1", () => {
    
    let hash = tmh.sha1(mockTxt);
    expect(hash).to.be.a('string');
    expect(hash).to.be.equal(mochaSHA1);
    
  });


  it("#SHA224", () => {
    
    let hash = tmh.sha224(mockTxt);
    expect(hash).to.be.a('string');
    expect(hash).to.be.equal(mockSHA224);
    
  });

  it("#SHA256", () => {
    
    let hash = tmh.sha256(mockTxt);
    expect(hash).to.be.a('string');
    expect(hash).to.be.equal(mockSHA256);
    
  });


  it("#SHA384", () => {
    
    let hash = tmh.sha384(mockTxt);
    expect(hash).to.be.a('string');
    expect(hash).to.be.equal(mockSHA384);
    
  });

  it("#SHA3", () => {
    
    let hash = tmh.sha3(mockTxt);
    expect(hash).to.be.a('string');
    expect(hash).to.be.equal(mockSHA3);
    
  });

  it("#SHA512", () => {
    
    let hash = tmh.sha512(mockTxt);
    expect(hash).to.be.a('string');
    expect(hash).to.be.equal(mockSHA512);
    
  });

});
