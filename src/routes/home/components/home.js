'use strict';

import React from 'react';
import {pick} from 'lodash/object';

import FoodList from './food-list';

const Home = (props) => {
  const {
    InitialData: {
      animals,
      vegetables
    }
  } = props;

  const data = animals.concat(vegetables).map(item => pick(item, ['name', 'carb', 'fat', 'protein', 'calo']));

  return (
    <div className="Home container">
      <div className="row">
        <div className="col-md-9">
          <FoodList data={data} />
        </div>
        <div class="col-md-6">
        </div>
      </div>

    </div>
  );
};

Home.displayName = 'Home';

export default Home;
