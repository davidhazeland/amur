import test from 'tape';

import {sort} from 'routes/nutrition/components/food-list';

test('[Home route] FoodList component - sort() function', assert => {
  const x = [3, 10, 100];
  const y = [4, 20, 100];
  const order = ['desc', 'asc', 'desc'];

  const actual = [];
  const expected = [];

  actual[0] = sort(x[0], y[0], order[0]);
  expected[0] = 1;

  actual[1] = sort(x[1], y[1], order[1]);
  expected[1] = -1;

  actual[2] = sort(x[2], y[2], order[2]);
  expected[2] = 0;

  assert.deepEqual(actual, expected,
    'should pass test cases');

  assert.end();
});
