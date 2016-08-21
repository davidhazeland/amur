import test from 'tape';
import {call, take, fork} from 'redux-saga/effects';

import saga, {handle, getFoodList} from 'modules/home/sagas/get-initial-data-request';
import {actions, actionTypes} from 'modules/home';

import {fetch as fetchAnimals} from 'api/animal';
import {fetch as fetchVegetables} from 'api/vegetable';

test('[Home module] GetInitialDataRequest saga', assert => {
  const sagaIterator = saga();

  const actual = [];
  const expected = [];

  const parameter = {};
  const action = actions.getInitialDataRequest(parameter);

  actual[0] = sagaIterator.next().value;
  expected[0] = take(actionTypes.GET_INITIAL_DATA_REQUEST);

  assert.deepEqual(actual[0], expected[0],
    'should wait for action');

  actual[1] = sagaIterator.next(action).value;
  expected[1] = fork(handle, action);

  assert.deepEqual(actual[1], expected[1],
    'and then fork handle generator');

  actual[2] = sagaIterator.next().value;
  expected[2] = take(actionTypes.GET_INITIAL_DATA_REQUEST);

  assert.deepEqual(actual[2], expected[2],
    'and then continue waiting for action');

  assert.end();
});


test('[Home module] GetInitialDataRequest saga - getFoodList generator', assert => {
  const sagaIterator = getFoodList();

  const actual = [];
  const expected = [];

  actual[0] = sagaIterator.next().value;
  expected[0] = [
    call(fetchAnimals),
    call(fetchVegetables)
  ];

  assert.deepEqual(actual[0], expected[0],
    'should called API');

  const response = [
    {data: [
      {
        name: 'animal',
        carb: 1,
        fat: 2,
        protein: 3,
        calo: 4,
        other: 5
      }
    ]},
    {data: [
      {
        name: 'vegetable',
        carb: 5,
        fat: 4,
        protein: 3,
        calo: 2,
        other: 1
      }
    ]}
  ];
  actual[1] = sagaIterator.next(response).value;
  expected[1] = [
    {
      id: 0,
      name: 'animal',
      carb: 1,
      fat: 2,
      protein: 3,
      calo: 4
    },
    {
      id: 1,
      name: 'vegetable',
      carb: 5,
      fat: 4,
      protein: 3,
      calo: 2
    }
  ];

  assert.deepEqual(actual[1], expected[1],
    'and then should merged data');
  assert.end();
});
