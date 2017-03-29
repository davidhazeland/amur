import * as actionTypes from './action-types';

export const clear = (parameter) => {
  return {
    type: actionTypes.CLEAR,
    parameter
  }
};

export const initialize = (parameter) => {
  return {
    type: actionTypes.INITIALIZE,
    ...parameter
  }
};

export const addMeal = (parameter) => {
  return {
    type: actionTypes.ADD_MEAL,
    ...parameter
  }
};

export const removeMeal = (parameter) => {
  return {
    type: actionTypes.REMOVE_MEAL,
    ...parameter
  }
};
