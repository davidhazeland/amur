import * as actionTypes from './action-types';

export const clearInitialData = (parameter) => {
  return {
    type: actionTypes.CLEAR,
    parameter
  }
};

export const set = (parameter) => {
  return {
    type: actionTypes.SET,
    ...parameter
  }
};
