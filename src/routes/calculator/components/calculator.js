import React from 'react';

import Search from './calculator-search';
import MealList from './meal-list';

const Calculator = (props) => {
  const {
    Initial: {
      foodList
    },
    Calculator: {
      mealList
    },
    actions: {
      addMeal,
      removeMeal,
      clear
    }
  } = props;

  function handleSelect(meal) {
    addMeal({
      meal
    });
  }

  function handleRemove(meal) {
    removeMeal({
      meal
    });
  }

  function handleReset() {
    clear();
  }

  return (
    <div className="Calculator">
      <Search foodList={foodList} onSelect={handleSelect}/>

      <MealList data={mealList} onRemoveMeal={handleRemove}></MealList>

      <button className="ui right floated primary button" onClick={handleReset}>Reset</button>
    </div>
  );
};

Calculator.propTypes = {

}

Calculator.displayName = 'Calculator';

export default Calculator;
