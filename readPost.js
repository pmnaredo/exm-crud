import { exmInstance } from './exm.js';
import { functionId } from './functionId.js';

const inputs = [
  {
    type: 'readPost',
    postId: process.argv[2],
  },
];

// NOTE: The 'write' method is used for reading a particular post, as 'read' has not 'inputs'
// parameter
const data = await exmInstance.functions.write(functionId, inputs);
console.log(JSON.stringify(data.data.execution.result, null, 2));
