import animals from 'data/animals.json';

import * as myself from './animal';
export default myself;

export function fetch() {
  return new Promise((resolve) => {
    resolve({
      data: animals
    });
  });
}
