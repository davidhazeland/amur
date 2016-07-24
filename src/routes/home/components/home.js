'use strict';

import React from 'react';

import Calculator from './calculator';
import FoodList from './food-list';

const Home = (props) => {
  const {
    InitialData: {
      foodList
    },
    Home: {
      mealList
    },
    actions
  } = props;

  return (
    <div className="Home container">
      <div className="ui grid">
        <div className="eight wide column">
          <FoodList data={foodList} />
        </div>
        <div className="eight wide column">
          <Calculator mealList={mealList} data={foodList} {...actions}/>
        </div>
      </div>
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
