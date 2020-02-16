import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieList from "./MovieList";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchMovieForGenre, fetchMovieForSearch } from "../../core/thunks";
import Loader from '../../components/Loader';
import styles from './HomePage.module.css';

/**
 * HomePage Component, show a list of movies depending on the parameter 
 * that comes through the router.
 */
export const HomePage = () => {
  const { type = "" } = useParams();
  const { category = "" } = useParams();
  const { query = ""} = useParams();
  const dispatch = useDispatch();
  const filmResponse = useSelector(state => state.filmReducer);
  useEffect(() => {
    if (category !== "") {
      dispatch(fetchMovieForGenre(category));
    }
    if (type !== "") {
      dispatch(fetchData(type));
    }
    if (query !== "") {
      dispatch(fetchMovieForSearch(query));
    }
  }, [dispatch, type, category, query]);
  return (
    <>
      {
        filmResponse.loading === true ?
        <div className={styles.Loader}><Loader/></div> :
        <MovieList movieArray={filmResponse.films} />
      }
    </>
  );
};

export default HomePage;
