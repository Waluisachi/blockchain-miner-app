const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');
const {v1 : uuidV1} = require('uuid');

const ec = new EC('secp256k1');

class CoinUtil {

  static generateKeyPair() {
    return ec.genKeyPair();
  }

  static id(){
    return uuidV1();
  }

  //  object => string
  static hash(data){
    return SHA256(JSON.stringify(data)).toString();
  }

  static verifySignature(publicKey, signature, dataHash){
    return ec.keyFromPublic(publicKey, 'hex').verify(dataHash, signature);
  }
}

module.exports = CoinUtil;
