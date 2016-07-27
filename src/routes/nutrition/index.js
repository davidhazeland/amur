'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Nutrition from './containers/nutrition';

export default path => (
  <Route path={path}>
    <IndexRoute component={Nutrition}/>
  </Route>
);
