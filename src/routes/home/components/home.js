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
    actions: {
      addMeal
    }
  } = props;

  return (
    <div className="Home container">
      <div className="ui grid">
        <div className="eight wide column">
          <FoodList data={foodList} />
        </div>
        <div className="eight wide column">
          <Calculator addMeal={addMeal} mealList={mealList} data={foodList}/>
        </div>
      </div>
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
