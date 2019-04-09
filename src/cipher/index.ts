import Base64 from 'base-64';
import encBas64 from 'crypto-js/enc-base64';
import encUtf8 from 'crypto-js/enc-utf8';
import AES from 'crypto-js/aes';
import { IVType, ICipher } from "./interfaces";

export class Cipher implements ICipher {

    private key: string = '';

    public constructor() {
        this.setKey(window.CIPHER_KEY);
    }

    public static getIV(encrypted: IVType): IVType {
        return { iv: encBas64.parse(encrypted.iv) };
    }

    public setKey(key: string): void {
        this.key = encBas64.parse(key);
    }

    public getKey(): string {
        return this.key;
    }

    public toString(decrypted: any): string {
        return decrypted.toString(encUtf8)
    }

    public decrypt(data: any): string {
        const encrypted = JSON.parse(Base64.decode(data));
        const decrypted = AES.decrypt(encrypted.value, this.getKey(), Cipher.getIV(encrypted));

        return this.toString(decrypted);
    }

}
