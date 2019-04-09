export { Cipher } from './cipher';

declare global {
    interface Window {
        CIPHER_KEY: string;
        CIPHER_STATUS: boolean;
    }
}

