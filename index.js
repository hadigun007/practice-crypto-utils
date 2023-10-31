const wallet = require("./wallet.js")

let r = wallet.generate()

console.log("Address: \t"+r.getAddressString())
console.log("Private key: \t"+r.getPrivateKeyString())
console.log("Public key: \t"+r.getPublicKeyString())