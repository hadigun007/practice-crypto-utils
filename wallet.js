const Wallet = require('ethereumjs-wallet');


const generate = ()=>{
    return Wallet.default.generate()
}


module.exports = {generate} 
