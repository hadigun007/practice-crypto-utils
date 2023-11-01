const { isAddress } = require("web3-validator");

function isAddressValid(address){
    console.log('jnjnj')
    let result = isAddress(address);
    
    console.log(`
    ${address}   =>   ${result}
    `);
}

module.exports = { isAddressValid }