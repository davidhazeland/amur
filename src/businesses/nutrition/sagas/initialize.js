import {call, put, take, fork} from 'redux-saga/effects';

import * as actionTypes from '../action-types';
import {actions as initialActions} from 'ironlake/businesses/initial';

import {getFoodList} from 'sagas/list';

export function* handle() {
  try {
    const foodList = yield call(getFoodList);

    yield put(initialActions.set({
      foodList
    }));
  }
  catch (error) {

  }
}

export default function* () {
  while (true) {
    const action = yield take(actionTypes.INITIALIZE);

    yield fork(handle, action);
  }
}
