import reducer, {initialState} from '../reducer';
import * as actions from '../actions';

describe('Calculator', function() {
  describe('[Reducer]', function() {
    test('Handle CLEAR action', () => {
      const state = {};
      const action = actions.clear();
      const nextState = reducer(state, action);

      let actual;
      let expected;

      actual = nextState;
      expected = initialState;

      expect(actual).toEqual(expected);
    });
  });
});

import test from 'tape';
import freeze from 'deep-freeze';
import reducer, {actions} from 'modules/calculator';

test('[Home module] reducer', assert => {
  const state = freeze({});
  reducer(state, {type: 'INVALID'});

  assert.pass('should not change passed state');
  assert.end();
});

test('[Home module] reducer', nest => {
  nest.test('...handle ADD_MEAL action', assert => {
    const action = actions.addMeal({
      meal: {
        id: 1
      }
    });
    const state = freeze({
      mealList: []
    });
    const nextState = reducer(state, action);

    const actual = nextState;
    const expected = {
      mealList: [{
        id: 1
      }]
    };

    assert.deepEqual(actual, expected,
      'should added meal to meal list');
    assert.end();
  });

  nest.test('...handle ADD_MEAL action with dupplicated', assert => {
    const action = actions.addMeal({
      meal: {
        food: {
          id: 1
        },
        quantity: 100
      }
    });
    const state = freeze({
      mealList: [{
        food: {
          id: 1
        },
        quantity: 50
      }]
    });
    const nextState = reducer(state, action);

    const actual = nextState;
    const expected = {
      mealList: [{
        food: {
          id: 1
        },
        quantity: 150
      }]
    };

    assert.deepEqual(actual, expected,
      'should added meal to meal list');
    assert.end();
  });

  nest.test('...handle REMOVE_MEAL action', assert => {
    const action = actions.removeMeal({
      meal: {
        food: {
          id: 1
        }
      }
    });
    const state = freeze({
      mealList: [{
        food: {
          id: 1
        }
      }, {
        food: {
          id: 2
        }
      }]
    });
    const nextState = reducer(state, action);

    const actual = nextState;
    const expected = {
      mealList: [{
        food: {
          id: 2
        }
      }]
    };

    assert.deepEqual(actual, expected,
      'should removed meal from meal list');
    assert.end();
  });
});
