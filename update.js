import { exmInstance } from './exm.js';
import { functionId } from './functionId.js';

const inputs = [
  {
    type: 'updatePost',
    post: {
      id: process.argv[2], // needs to be specified somehow
      title: 'Hello, world!',
      content: 'My first post [updated]',
      author: 'John Doe',
    },
  },
];

const data = await exmInstance.functions.write(functionId, inputs);
console.log({ data });
