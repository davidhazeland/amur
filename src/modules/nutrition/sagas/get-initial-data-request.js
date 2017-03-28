

import {call, put, take, fork} from 'redux-saga/effects';

import * as actionTypes from '../action-types';
import {actions as initialDataActions} from 'modules/initial-data';

import {getFoodList} from 'modules/home/sagas/get-initial-data-request';

export function* handle() {
  try {
    const foodList = yield call(getFoodList);

    yield put(initialDataActions.set({
      foodList
    }));
  }
  catch (error) {

  }
}

export default function* () {
  while (true) {
    const action = yield take(actionTypes.GET_INITIAL_DATA_REQUEST);

    yield fork(handle, action);
  }
}
