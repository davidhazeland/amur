import {call, put, take, fork} from 'redux-saga/effects';

import saga, {handle} from '../initialize';
import {actions, actionTypes} from '../../index';

import {actions as notificationActions} from 'ironlake/businesses/notification';

describe('Calculator', () => {
  test('[Saga] Initialize', () => {
    const sagaIterator = saga();

    let actual;
    let expected;

    const parameter = {};
    const action = actions.initialize(parameter);

    actual = sagaIterator.next().value;
    expected = take(actionTypes.INITIALIZE);

    expect(actual).toEqual(expected);

    actual = sagaIterator.next(action).value;
    expected = fork(handle, action);

    expect(actual).toEqual(expected);

    actual = sagaIterator.next().value;
    expected = take(actionTypes.INITIALIZE);

    expect(actual).toEqual(expected);
  });

  describe('[Saga] Initialize - handle() generator', () => {
    xtest('Exception', () => {
      const parameter = {};
      const action = actions.initialize(parameter);
      const sagaIterator = handle(action);

      let actual;
      let expected;

      sagaIterator.next();

      const error = new Error('error');

      actual = sagaIterator.throw(error).value;
      expected = put(notificationActions.notifyFailure({
        message: 'error'
      }));

      expect(actual).toEqual(expected);
    });
  });
});