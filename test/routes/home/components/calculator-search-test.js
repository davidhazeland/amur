import test from 'tape';

import {matchStateToTerm} from 'routes/home/components/calculator-search';

test('[Home route] CalculatorSearch component - matchStateToTerm() function', nest => {
  nest.test('...keyword length', assert => {
    const state = {
      name: 'Beef'
    }

    const actual = [];
    const expected = [];

    actual[0] = matchStateToTerm(state, '10g B');
    expected[0] = false;

    actual[1] = matchStateToTerm(state, '10g Be');
    expected[1] = true;

    assert.deepEqual(actual, expected,
      'should greater than 2');
    assert.end();
  });

  nest.test('...case insensitive', assert => {
    const state = {
      name: 'Beef'
    }

    const actual = matchStateToTerm(state, '10g be');
    const expected = true;

    assert.deepEqual(actual, expected,
      'should be enable');

    assert.end();
  });

  nest.test('... case base', assert => {
    const state = {
      name: 'Beef'
    }

    const actual = matchStateToTerm(state, '10g Bé');
    const expected = true;

    assert.deepEqual(actual, expected,
      'should be enable');

    assert.end();
  });
});
