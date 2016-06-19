'use strict';

import React from 'react';

import Calculator from './calculator';
import FoodList from './food-list';

const Home = (props) => {
  const {
    InitialData: {
      foodList
    }
  } = props;

  function addFood(data) {
    console.log(data);
  }

  return (
    <div className="Home container">
      <div className="ui grid">
        <div className="eight wide column">
          <FoodList data={foodList} />
        </div>
        <div className="eight wide column">
          <Calculator addFood={addFood}/>
        </div>
      </div>
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
