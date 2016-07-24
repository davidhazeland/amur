import test from 'tape';

import {resolve} from 'utils/food';

test('resolve() function', nest => {
  nest.test('gram', assert => {
    const input = '500g Brisket of Beef';

    const actual = resolve(input);
    const expected = {
      quantity: 500,
      name: 'Brisket of Beef'
    }

    assert.deepEqual(actual, expected ,
      'should calculate quantity and name');
    assert.end();
  });

  nest.test('kilogram', assert => {
    const input = '5kg Brisket of Beef';

    const actual = resolve(input);
    const expected = {
      quantity: 5000,
      name: 'Brisket of Beef'
    }

    assert.deepEqual(actual, expected ,
      'should calculate quantity and name');
    assert.end();
  });

  nest.test('point', assert => {
    const input = '1.3kg Brisket of Beef';

    const actual = resolve(input);
    const expected = {
      quantity: 1300,
      name: 'Brisket of Beef'
    }

    assert.deepEqual(actual, expected ,
      'should calculate quantity and name');
    assert.end();
  });
})
