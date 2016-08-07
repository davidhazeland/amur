import * as actionTypes from './action-types';

export const clear = (parameter) => {
  return {
    type: actionTypes.CLEAR,
    parameter
  }
};

export const getInitialDataRequest = (parameter) => {
  return {
    type: actionTypes.GET_INITIAL_DATA_REQUEST,
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
