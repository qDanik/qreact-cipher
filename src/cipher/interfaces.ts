export interface IVType {
    iv: any;
}

export interface ICipher {
    setKey(key: string): void;
    getKey(): string;
    toString(decrypted: any): string;
    decrypt(data: any): string;
}
