import { Exm } from '@execution-machine/sdk';
const API_KEY = process.env.EXM_API_KEY;

//console.log(API_KEY);
export const exmInstance = new Exm({ token: API_KEY });
