import test from 'tape';
import {take, fork} from 'redux-saga';

import saga, {handle} from 'modules/nutrition/sagas/get-initial-data-request';
import {actions, actionTypes} from 'modules/nutrition';

test('[Nutrition module] GetInitialDataRequest saga', assert => {
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
