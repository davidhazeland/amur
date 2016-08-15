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

export function format(quantity) {
  return math.unit(`${quantity}g`).format();
}


export function toBase(str) {
  str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,'a');
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,'e');
	str= str.replace(/ì|í|ị|ỉ|ĩ/g,'i');
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,'o');
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,'u');
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,'y');
	str= str.replace(/đ/g,'d');
	return str;
}
