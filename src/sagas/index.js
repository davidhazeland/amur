import { sagas as Calculator } from 'businesses/calculator';
import { sagas as Nutrition } from 'businesses/nutrition';
import { sagas as Initial } from 'ironlake/businesses/initial';
import { flatten } from 'lodash/array';
import { values } from 'lodash/object';
const sagasList = [
  Calculator,
  Nutrition,
  Initial
];
import { fork } from 'redux-saga/effects';
module.exports = function* () {
  yield flatten(sagasList.map(sagas => values(sagas))).map(saga => fork(saga));
};
