'use strict';

import React from 'react';

import Calculator from './calculator';

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
    <div className="Home">
      <Calculator mealList={mealList} data={foodList} {...actions}/>
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
