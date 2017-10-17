# Take my Hash     [![Build Status](https://travis-ci.org/pjbank/pjbank-js-sdk.svg?branch=master)](https://travis-ci.org/pjbank/pjbank-js-sdk) [![npm version](https://badge.fury.io/js/take-my-hash.svg)](https://badge.fury.io/js/take-my-hash)
Crypto.js helper - for lazy people (like me) 

## Quickstart

```bash
npm install --save take-my-hash
```

```javascript
const tmh = require('take-my-hash');
```

## AES 

```javascript

let hash = tmh.AESEncrypt('my text', 'my key 123');
let rawText = tmh.AESDecrypt(hash, 'my key 123');

console.log(hash, rawText);

```

## MD5

```javascript
let hash = tmh.md5('my text');
```

## SHA1 

```javascript
let hash = tmh.sha1('my text');
```

## SHA224

```javascript
let hash = tmh.sha224('my text');
```

## SHA256

```javascript
let hash = tmh.sha256('my text');
```

## SHA384

```javascript
let hash = tmh.sha384('my text');
```

## SHA3

```javascript
let hash = tmh.sha3('my text');
```

## SHA512

```javascript
let hash = tmh.sha512('my text');
```

