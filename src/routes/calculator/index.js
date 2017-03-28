import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Calculator from './containers/calculator';

export const component = Calculator;

export default path => (
  <Route path={path}>
    <IndexRoute component={component}/>
  </Route>
);
