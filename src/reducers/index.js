import Calculator from 'businesses/calculator';
import Nutrition from 'businesses/nutrition';
import Initial from 'ironlake/businesses/initial';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { i18nReducer as i18n } from 'react-redux-i18n';
const reducers = {
  Calculator,
  Nutrition,
  Initial
};
module.exports = combineReducers(Object.assign(reducers, {
  routing,
  i18n
}));
