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
