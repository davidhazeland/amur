

import React from 'react';

import FoodList from './food-list';

const Nutrition = (props) => {
  const {
    InitialData: {
      foodList
    }
  } = props;

  return (
    <div className="Nutrition">
      <FoodList data={foodList}/>
    </div>
  );
};

Nutrition.displayName = 'Nutrition';

export default Nutrition;
