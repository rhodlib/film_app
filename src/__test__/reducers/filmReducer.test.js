import FilmReducer from "../../core/reducers/filmReducer";
import MovieMock from "../../__mocks__/MovieMock";
import ReviewsMock from "../../__mocks__/ReviewsMock";
import CategoresMock from "../../__mocks__/CategoriesMock";
import * as types from "../../core/constants";
import InitialStateMock from "../../__mocks__/InitialStateMock";

describe("FilmReducer", () => {
  it("Return default initialState when no actions is passed", () => {
    const newState = FilmReducer(undefined, {});
    expect(newState).toEqual(InitialStateMock);
  });

  it("should handle FETCH_DATA", () => {
    const movieArr = MovieMock;
    const reducer = FilmReducer(InitialStateMock, {
      type: types.FETCH_DATA,
      payload: movieArr
    });
    expect(reducer.films).toEqual(movieArr);
  });

  it("should handle FETCH_MOVIE", () => {
    const movie = MovieMock[0];
    const reducer = FilmReducer(InitialStateMock, {
      type: types.FETCH_MOVIE,
      payload: movie
    });
    expect(reducer.movie).toEqual(movie);
  });

  it("should handle FETCH_TRAILER", () => {
    const trailer = ["http://test.com/video"];
    const reducer = FilmReducer(InitialStateMock, {
      type: types.FETCH_TRAILER,
      payload: trailer
    });
    expect(reducer.movieTrailer).toEqual(trailer);
  });

  it("should handle FETCH_REVIEWS", () => {
    const reviews = ReviewsMock;
    const reducer = FilmReducer(InitialStateMock, {
      type: types.FETCH_REVIEWS,
      payload: reviews
    });
    expect(reducer.movieReviews).toEqual(reviews);
  });

  it("should handle FETCH_CATEGORIES", () => {
    const categories = CategoresMock;
    const reducer = FilmReducer(InitialStateMock, {
      type: types.FETCH_CATEGORIES,
      payload: categories
    });
    expect(reducer.categories).toEqual(categories);
  });

  it("should handle FETCH_RECOMMENDATIONS", () => {
    const movieArr = MovieMock;
    const reducer = FilmReducer(InitialStateMock, {
      type: types.FETCH_RECOMMENDATIONS,
      payload: movieArr
    });
    expect(reducer.movieRecommendations).toEqual(movieArr);
  });

  it("should handle LOADING", () => {
    const reducer = FilmReducer(InitialStateMock, {
      type: types.LOADING,
      payload: true
    });
    expect(reducer.loading).toEqual(true);
  });

  it("should handle ERROR", () => {
    const reducer = FilmReducer(InitialStateMock, {
      type: types.ERROR,
      payload: "error msg"
    });
    expect(reducer.error).toEqual("error msg");
  });
});