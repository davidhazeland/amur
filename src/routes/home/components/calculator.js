'use strict';

import React from 'react';

import Search from './calculator-search';
import MealList from './meal-list';

const Calculator = (props) => {
  const {
    data,
    addMeal,
    mealList
  } = props;

  function handleSelect(meal) {
    addMeal({
      meal
    });
  }

  return (
    <div className="Calculator">
      <Search foodList={data} onSelect={handleSelect}/>

      <MealList data={mealList}></MealList>

      <button className="ui right floated primary button">Reset</button>
    </div>
  );
};

Calculator.displayName = 'Calculator';

export default Calculator;
