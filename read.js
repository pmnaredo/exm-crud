import { exmInstance } from './exm.js';
import { functionId } from './functionId.js';

const data = await exmInstance.functions.read(functionId);
console.log(JSON.stringify(data, null, 2));
