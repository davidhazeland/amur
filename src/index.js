import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { loadTranslations, setLocale, syncTranslationWithStore, I18n } from 'react-redux-i18n';

import configureStore from './stores';
import createRoutes from './routes/base';

import translation from 'services/i18n';
import {lang} from 'config';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

syncTranslationWithStore(store);
I18n.setHandleMissingTranslation(key => key);

store.dispatch(loadTranslations(translation));
store.dispatch(setLocale(lang));

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
