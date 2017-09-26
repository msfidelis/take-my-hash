# take-my-hash
Crypto.js helper - for lazy people (like me) 

## Quickstart

```bash
npm install --save take-my-hash
```

```javascript
const tmh = require('take-my-hash');
```

## AES 

### Encrypt

```javascript

let hash = tmh.AESEncrypt('my text', 'my key 123');
let rawText = tmh.AESDecrypt(hash, 'my key 123');

console.log(hash, rawText);

```

