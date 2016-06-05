import Home from 'modules/home';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
const reducers = { Home };
module.exports = combineReducers(Object.assign(reducers, { routing }));
