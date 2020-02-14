import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieList from "./MovieList";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchMovieForGenre } from "../../core/thunks";

/**
 * HomePage Component, show a list of movies depending on the parameter 
 * that comes through the router.
 */
export const HomePage = () => {
  const { type = "" } = useParams();
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  const filmResponse = useSelector(state => state.filmReducer);
  useEffect(() => {
    if (id !== "") {
      dispatch(fetchMovieForGenre(id));
    }
    if (type !== "") {
      dispatch(fetchData(type));
    }
  }, [dispatch, type, id]);
  return (
    <>
      <MovieList movieArray={filmResponse} />
    </>
  );
};

export default HomePage;
