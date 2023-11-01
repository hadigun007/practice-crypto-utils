const Wallet = require("ethereumjs-wallet");
const fs = require("fs");

const generate = () => {
  let w = Wallet.default.generate();
  let data = {
    hex:{
        address: w.getAddressString(),
        public_key: w.getPublicKeyString(),
        private_key: w.getPrivateKeyString(),
    },
    buffer:{
        address: w.getAddress(),
        address_checksum : w.getChecksumAddressString(),
        public_key: w.getPublicKey(),
        private_key: w.getPrivateKey(),
    },
  }
  let name = Math.random(99999).toString().replace('0.', '')
  fs.writeFileSync(`wallet/wallet-${name}.json`, JSON.stringify(data));
  return w;
};

module.exports = { generate };
