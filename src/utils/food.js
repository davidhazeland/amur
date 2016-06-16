const math = require('mathjs');

export function resolve(data) {
  const splits = data.split(' ');
  const quantity = math.unit(splits.shift()).toNumber('gram');
  const name = splits.join(' ');

  return {
    quantity,
    name
  }
}
