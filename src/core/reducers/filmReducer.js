/**
 * Films Reducers.
 */

import {
  FETCH_DATA,
  FETCH_MOVIE,
  FETCH_CATEGORIES,
  FETCH_RECOMMENDATIONS,
  FETCH_REVIEWS,
  FETCH_TRAILER,
  LOADING,
  ERROR
} from "../constants";

// Initial state.
const INITIAL_STATE = {
  films: [], // Store of films array.
  movie: {}, // Store of movie object.
  movieReviews: [], //Store of reviews of a specific movie.
  movieRecommendations: [], //Store of recommendations of a specific movie.
  movieTrailer: [], //Store of trailer of a specific movie.
  categories: [], //Store of all categories from movies.
  loading: false, //Store of loading status.
  error: "" //Store errors.
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
    case FETCH_TRAILER:
      return {
        ...state,
        movieTrailer: action.payload,
        loading: false
      };
    case FETCH_REVIEWS:
      return {
        ...state,
        movieReviews: action.payload,
        loading: false
      };
    case FETCH_RECOMMENDATIONS:
      return {
        ...state,
        movieRecommendations: action.payload,
        loading: false
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
