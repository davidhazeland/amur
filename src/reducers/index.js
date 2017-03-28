import Nutrition from 'modules/nutrition';
import InitialData from 'modules/initial-data';
import Home from 'modules/home';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {i18nReducer as i18n} from 'react-redux-i18n';
const reducers = {
  Nutrition,
  InitialData,
  Home
};
module.exports = combineReducers(Object.assign(reducers, { routing, i18n }));
