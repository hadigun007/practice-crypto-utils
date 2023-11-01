const { createHash } = require("crypto");

function generateChecksum(string) {

  const result = createHash("sha512").update(string).digest("hex");
  console.log(result);return result;
  
}

function verifyChecksum(string, checksum) {

  var generatedCheckSum = createHash("sha512").update(string).digest("hex");

  if (generatedCheckSum == checksum) {
    console.log("true");return true;
  } else {
    console.log("false");return false;
  }

}

module.exports = { generateChecksum, verifyChecksum };
