'use strict';

import {call, put, take, fork} from 'redux-saga';

import * as actionTypes from '../action-types';
import {actions as initialDataActions} from 'modules/initial-data';

import {fetch as fetchAnimals} from 'api/animal';
import {fetch as fetchVegetables} from 'api/vegetable';

export function* handle() {
  try {
    const [
      {data: animals},
      {data: vegetables}
    ] = yield [
      call(fetchAnimals),
      call(fetchVegetables)
    ];

    yield put(initialDataActions.set({
      animals,
      vegetables
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
