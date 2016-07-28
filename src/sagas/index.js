import { sagas as Nutrition } from 'modules/nutrition';
import { sagas as InitialData } from 'modules/initial-data';
import { sagas as Home } from 'modules/home';
import { flatten } from 'lodash/array';
import { values } from 'lodash/object';
const sagasList = [
  Nutrition,
  InitialData,
  Home
];
import {fork} from 'redux-saga/effects';

module.exports = function* () {
  yield flatten(sagasList.map(sagas => values(sagas))).map(saga => fork(saga));
};
