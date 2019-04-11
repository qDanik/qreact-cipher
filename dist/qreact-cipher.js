'use strict';function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var Base64=_interopDefault(require('base-64')),encBas64=_interopDefault(require('crypto-js/enc-base64')),encUtf8=_interopDefault(require('crypto-js/enc-utf8')),AES=_interopDefault(require('crypto-js/aes'));var Cipher = /** @class */ (function () {
    function Cipher() {
        this.key = '';
        this.setKey(window.CIPHER_KEY);
    }
    Cipher.getIV = function (encrypted) {
        return { iv: encBas64.parse(encrypted.iv) };
    };
    Cipher.prototype.setKey = function (key) {
        this.key = encBas64.parse(key);
    };
    Cipher.prototype.getKey = function () {
        return this.key;
    };
    Cipher.prototype.toString = function (decrypted) {
        return decrypted.toString(encUtf8);
    };
    Cipher.prototype.decrypt = function (data) {
        var encrypted = JSON.parse(Base64.decode(data));
        var decrypted = AES.decrypt(encrypted.value, this.getKey(), Cipher.getIV(encrypted));
        return this.toString(decrypted);
    };
    return Cipher;
}());module.exports=Cipher;