import { ALIEN } from '../constants';

export const isStringHtml = source => source.includes('<') || source.includes('/>');

export const obscureString = source => source.split('').map(() => ALIEN).join('');

export const createObscuredStrOfLen = len => new Array(len).fill(ALIEN).join();