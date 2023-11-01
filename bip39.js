const bip39 = require("bip39")
const fs = require("fs");


const generateMnemonic = () => {
    let mnemonic =  bip39.generateMnemonic()
    let name = Math.random(99999).toString().replace('0.', '')
  fs.writeFileSync(`wallet/mnemonic-${name}.json`, JSON.stringify(mnemonic));
    return mnemonic
}

const hh = () => {
    let mnemonic =  bip39.mnemonicToSeed("decrease clever one gain forum rude domain car rude noble embark mouse")
    mnemonic.then((dd=>{console.log(dd.toString('hex'))}))
  //   let name = Math.random(99999).toString().replace('0.', '')
  // fs.writeFileSync(`wallet/mnemonic-${name}.json`, JSON.stringify(mnemonic));
    // return mnemonic
}

const seedToMnemonic = ()=> {
  bip39.entropyToMnemonic('d6aff87139bee8319e0146e2c32f9648bde90be3cbf82a0da2e0c72b064c5fe5dbdefd3a4f1841acb0dc8eb54f8605686bf3d4d871d7839586a7131cea8d4ae8')
}


module.exports = { generateMnemonic, hh, seedToMnemonic };
