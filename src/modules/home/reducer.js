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
      return freeze({
        ...state,
        mealList: [
          ...state.mealList,
          action.meal
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
