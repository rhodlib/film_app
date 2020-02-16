/**
 * Films Reducers.
 */

import {
  FETCH_DATA,
  FETCH_MOVIE,
  FETCH_CATEGORIES,
  LOADING,
  ERROR
} from "../constants";

// Initial state.
const INITIAL_STATE = {
  films: [],
  movie: {},
  categories: [],
  loading: false,
  error: ''
};

// Export a function with a initial state and a action, and return a specific case.

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        films: action.payload,
        loading: false
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case LOADING:
      return {
        ...state,
        loading : true
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
};
