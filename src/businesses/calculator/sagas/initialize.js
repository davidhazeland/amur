import {call, put, take, fork} from 'redux-saga/effects';
import {pick} from 'lodash/object';

import * as actionTypes from '../action-types';
import {actions as initialActions} from 'ironlake/businesses/initial';

import {fetch as fetchAnimals} from 'api/animal';
import {fetch as fetchVegetables} from 'api/vegetable';

const properties = ['name', 'carb', 'fat', 'protein', 'calo'];

export function* getFoodList() {
  const [
    {data: animals},
    {data: vegetables}
  ] = yield [
    call(fetchAnimals),
    call(fetchVegetables)
  ];

  const foodList = [].concat(animals, vegetables).map((item, index) => ({
    id: index,
    ...pick(item, properties)
  }));
  return foodList;
}

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
