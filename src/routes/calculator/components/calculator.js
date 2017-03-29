import React from 'react';
import Radium from 'radium';

import {Translate} from 'react-redux-i18n';

import Search from './calculator-search';
import MealList from './meal-list';

import {mobile, tablet} from 'styles';

const style = {
  [mobile]: {
    marginTop: '1rem'
  },
  [tablet]: {
    margin: '1rem'
  }
}

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
    <div className="Calculator" style={style}>
      <Search foodList={foodList} onSelect={handleSelect}/>

      <MealList data={mealList} onRemoveMeal={handleRemove}></MealList>

      <button className="ui right floated primary button" onClick={handleReset}>
        <Translate value="calculator.reset"/>
      </button>
    </div>
  );
};

Calculator.propTypes = {

}

Calculator.displayName = 'Calculator';

export default Radium(Calculator);
