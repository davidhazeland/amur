

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './containers/home';

export const component = Home;

export default path => (
  <Route path={path}>
    <IndexRoute component={Home}/>
  </Route>
);
