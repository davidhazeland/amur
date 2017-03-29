import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';

import NutritionRoute from 'routes/nutrition';

import {component as Calculator} from 'routes/calculator';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Calculator}/>
      {NutritionRoute('nutrition')}
    </Route>
  );
}
