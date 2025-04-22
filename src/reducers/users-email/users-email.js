/**
 * Cart items reducer.
 * @module reducers/dataest_timeseries
 */

import { USERS_EMAIL } from '../../actions';

const initialState = {
  error: null,
  loaded: false,
  loading: false,
  datasets: {},
};

export const usersEmailReducer = (state = initialState, action = {}) => {
  switch (action?.type) {
    case `${USERS_EMAIL}_PENDING`:
      console.log('here its working');
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
      };
    case `${USERS_EMAIL}_FAIL`:
      return {
        ...state,
        error: action.error,
        loaded: false,
        loading: false,
      };

    case `${USERS_EMAIL}_SUCCESS`:
      return {
        ...state,
        error: null,
        loaded: true,
        loading: false,
        usersEmail: action.result,
      };
    default:
      return state;
  }
};
