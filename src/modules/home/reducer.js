'use strict';

import freeze from 'deep-freeze';
import * as actionTypes from './action-types';

const initialState = freeze({
  mealList: []
});

export default function (state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */

  switch (action.type) {
    case actionTypes.CLEAR: {
      return initialState;
    }

    case actionTypes.ADD_MEAL: {
      const {meal} = action;
      const {mealList} = state;

      const index = mealList.findIndex(m => m.food.id == meal.food.id);

      if (index !== -1) {
        return freeze({
          ...state,
          mealList: [
            ...mealList.slice(0, index),
            {
              ...meal,
              quantity: mealList[index].quantity + meal.quantity
            },
            ...mealList.slice(index+1, mealList.length)
          ]
        });
      }

      return freeze({
        ...state,
        mealList: [
          ...mealList,
          meal
        ]
      });
    }

    case actionTypes.REMOVE_MEAL: {
      const {meal} = action;
      const {mealList} = state;
      const index = mealList.findIndex(m => m.food.id == meal.food.id);

      return freeze({
        ...state,
        mealList: [
          ...mealList.slice(0, index),
          ...mealList.slice(index+1, mealList.length)
        ]
      });
    }

    default:
    {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
