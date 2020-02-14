import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MoviePage.module.css";
import DetailsMovieCard from "./DetailsMovieCard";
import Loader from "../../components/Loader";
import { fetchMovie } from "../../core/thunks";

/**
 * MoviePage Component, it shows a card with movie details.
 */
export const MoviePage = () => {
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  const movieResp = useSelector(state => state.filmReducer);
  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);
  return (
    <div className={styles.MoviePage}>
      {movieResp.movie === undefined ? (
        <Loader />
      ) : (
        <DetailsMovieCard
          title={movieResp.movie.title}
          average={movieResp.movie.vote_average}
          release={movieResp.movie.release_date}
          overview={movieResp.movie.overview}
          image={movieResp.movie.poster_path}
        />
      )}
    </div>
  );
};

export default MoviePage;
