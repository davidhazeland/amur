'use strict';

import React from 'react';
import {pick} from 'lodash/object';

import Calculator from './calculator';
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
      <div className="ui grid">
        <div className="eight wide column">
          <FoodList data={data} />
        </div>
        <div className="eight wide column">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
