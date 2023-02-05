import { exmInstance } from './exm.js';
import { functionId } from './functionId.js';
import { v4 as uuid } from 'uuid';

const id = uuid();
const inputs = [
  {
    type: 'createPost',
    post: {
      id,
      title: 'Hello, world!',
      content: 'My first post',
      author: 'John Doe',
    },
  },
  // {
  //   type: 'createPost',
  //   post: {
  //     id,
  //     title: 'Another one',
  //     content: 'This is my second post',
  //     author: 'John Doe',
  //   },
  // },
];

const data = await exmInstance.functions.write(functionId, inputs);
console.log({ data });
