import {
  FETCH_DATA,
  FETCH_MOVIE,
  FETCH_CATEGORIES,
  LOADING,
  ERROR,
  FETCH_RECOMMENDATIONS,
  FETCH_TRAILER,
  FETCH_REVIEWS
} from "./constants";
import {
  getData,
  getCategories,
  getMoviesForGenre,
  getSearchMovie,
  getMovieVideos,
  getMovieReviews,
  getMovieRecommendations
} from "./services";

// fetchData get a list of movies from a service.
export const fetchData = list => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const result = await getData(list);
    dispatch({
      type: FETCH_DATA,
      payload: result.data.results
    });
  } catch (err) {
    console.log("Error: " + err.message);
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
};

// fetchMovieGenre get a list of movies depends on genre.
export const fetchMovieForGenre = id => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const result = await getMoviesForGenre(id);
    dispatch({
      type: FETCH_DATA,
      payload: result.data.results
    });
  } catch (err) {
    console.log("Error: " + err.message);
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
};

// fetchMovieForSearch get a list of movies for a search query.
export const fetchMovieForSearch = query => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const result = await getSearchMovie(query);
    dispatch({
      type: FETCH_DATA,
      payload: result.data.results
    });
  } catch (err) {
    console.log("Error: " + err.message);
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
};

// fetchMovie get details of a specific movie that comes to prop.
export const fetchMovie = id => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const result = await getData(id);
    dispatch({
      type: FETCH_MOVIE,
      payload: result.data
    });
  } catch (err) {
    console.log("Error: " + err.message);
    dispatch({
      type: ERROR,
      payload: err.message
    });
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
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
};

// fetchMovieRecommendations get a list of recommendations from specific movie, but only the first five go to the state.
export const fetchMovieRecommendations = id => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const result = await getMovieRecommendations(id);
    dispatch({
      type: FETCH_RECOMMENDATIONS,
      payload: result.data.results.slice(0, 5)
    });
  } catch (err) {
    console.log("Error: " + err.message);
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
};

// fetchMovieVideos get a list of videos from a specific movie.
export const fetchMovieVideos = id => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const result = await getMovieVideos(id);
    dispatch({
      type: FETCH_TRAILER,
      payload: result.data.results
    });
  } catch (err) {
    console.log("Error: " + err.message);
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
};

// fetchMovieReviews get a list of reviews from a specific movie.
export const fetchMovieReviews = id => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const result = await getMovieReviews(id);
    console.log(result)
    dispatch({
      type: FETCH_REVIEWS,
      payload: result.data.results
    });
  } catch (err) {
    console.log("Error: " + err.message);
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
};
