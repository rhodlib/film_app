import { storeFactory } from "../utils/testUtils";
import InitialStateMock from "../../__mocks__/InitialStateMock";
import {
  fetchData,
  fetchCategories,
  fetchMovie,
  fetchMovieForGenre,
  fetchMovieForSearch,
  fetchMovieRecommendations,
  fetchMovieReviews,
  fetchMovieVideos
} from "../../core/thunks";

const store = storeFactory(InitialStateMock);

describe("Thunks", () => {
  it("fetchData", async () => {
    await store.dispatch(fetchData());
  });

  it("fetchMovieForGenre", async () => {
    await store.dispatch(fetchMovieForGenre());
  });

  it("fetchMovieForSearch", async () => {
    await store.dispatch(fetchMovieForSearch());
  });

  it("fetchMovie", async () => {
    await store.dispatch(fetchMovie());
  });

  it("fetchCategories", async () => {
    await store.dispatch(fetchCategories());
  });

  it("fetchMovieRecommendations", async () => {
    await store.dispatch(fetchMovieRecommendations());
  });

  it("fetchMovieVideos", async () => {
    await store.dispatch(fetchMovieVideos());
  });

  it("fetchMovieReviews", async () => {
    await store.dispatch(fetchMovieReviews());
  });
});