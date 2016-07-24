import { sagas as InitialData } from 'modules/initial-data';
import { sagas as Home } from 'modules/home';
import { flatten } from 'lodash/array';
import { values } from 'lodash/object';
const sagasList = [
  InitialData,
  Home
];
module.exports = flatten(sagasList.map(sagas => values(sagas)));
