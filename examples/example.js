import { Cipher } from '../src/cipher';

const cipher = new Cipher();

cipher.setKey('YOUR KEY');

const response = cipher.decrypt('YOUR DATA');
