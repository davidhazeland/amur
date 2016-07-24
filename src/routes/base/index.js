import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';

import {component as Home} from 'routes/home';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  );
}
