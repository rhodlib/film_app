/**
 * Films Reducers.
 */

import {
  FETCH_DATA,
  FETCH_MOVIE,
  FETCH_CATEGORIES,
} from "../constants";

// Initial state.
const INITIAL_STATE = {
  films: [],
  movie: {},
  categories: []
};

// Export a function with a initial state and a action, and return a specific case.

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        films: action.payload
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
    default:
      return state;
  }
};
