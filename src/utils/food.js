const math = require('mathjs');

export function resolve(data) {
  try {
    const splits = data.split(' ');
    const quantity = math.unit(splits.shift()).toNumber('gram');
    const name = splits.join(' ');

    return {
      quantity,
      name
    }
  }
  catch (e) {
    console.log(e); /* eslint no-console: 0 */
    return {
      quantity: 0,
      name: ''
    }
  }
}

export function getName(data) {
  const splits = data.split(' ');
  splits.shift();
  return splits.join(' ');
}
