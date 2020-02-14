import { FETCH_DATA, FETCH_MOVIE, FETCH_CATEGORIES, FETCH_GENRE } from "./constants";
import { getData, getCategories, getMoviesForGenre, getSearchMovie } from "./services";

// fetchData get a list of movies from a service.
export const fetchData = type => async dispatch => {
  try {
    const result = await getData(type);
    dispatch({
      type: FETCH_DATA,
      payload: result.data.results
    });
  } catch (err) {
    console.log("Error: " + err.message);
  }
};

// fetchMovieGenre get a list of movies depends on genre.
export const fetchMovieForGenre = id => async dispatch => {
  try {
    const result = await getMoviesForGenre(id);
    dispatch({
      type: FETCH_DATA,
      payload: result.data.results
    });
  } catch (err) {
    console.log("Error: " + err.message);
  }
};

export const fetchMovieForSearch = query => async dispatch => {
  try {
    const result = await getSearchMovie(query);
    dispatch({
      type: FETCH_DATA,
      payload: result.data.results
    });
  } catch (err) {
    console.log("Error: " + err.message);
  }
};

// fetchMovie get details of a specific movie that comes to prop.
export const fetchMovie = id => async dispatch => {
  try {
    const result = await getData(id);
    dispatch({
      type: FETCH_MOVIE,
      payload: result.data
    });
  } catch (err) {
    console.log("Error: " + err.message);
  }
};

// fetchCategories get a list of categories.
export const fetchCategories = () => async dispatch => {
  try {
    const result = await getCategories();
    dispatch({
      type: FETCH_CATEGORIES,
      payload: result.data.genres
    });
  } catch (err) {
    console.log("Error: " + err.message);
  }
};
