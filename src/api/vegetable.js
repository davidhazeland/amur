import vegetables from 'data/vegetables.json';

import * as myself from './vegetable';
export default myself;

export function fetch() {
  return new Promise((resolve) => {
    resolve({
      data: vegetables
    });
  });
}
