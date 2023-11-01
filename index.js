const { hh, seedToMnemonic, generateSeed } = require("./bip39.js")
const wallet = require("./wallet.js")
const {isAddressValid} = require('./isAddress.js')
const { generateChecksum, verifyChecksum } = require("./checksum.js")

// wallet.generate()
// generateMnemonic()
// hh()
// seedToMnemonic()
// generateSeed()

// isAddressValid('0x98C3d3183C4b8A650614ad179A1a98be0a8d6B8E')

generateChecksum('hadi gunawan')
// verifyChecksum('hadi gunawan','033cadc2de484b0a501f2adbbc20ca9bc72a95de')


// sha1 = 033cadc2de484b0a501f2adbbc20ca9bc72a95de
// sha256 = c64b8dabd07d21b3001b2c50d162c9960c0a55763362840ee7a05550cbf48c31
// sha512 = 1175184eec943de0c2b0a3b44e0e4b6a5a0f07155897af3bea067830a7d918d210a32d28950e97842716808bfed8213668ccbe750e37f1dd360049617264e0fc
// md5 = 8dea7c63d9a8779a1ca930af330d52b4