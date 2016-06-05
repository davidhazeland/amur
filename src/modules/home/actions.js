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
