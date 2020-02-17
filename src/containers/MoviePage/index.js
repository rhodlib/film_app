import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MoviePage.module.css";
import DetailsMovieCard from "./DetailsMovieCard";
import Loader from "../../components/Loader";
import {
  fetchMovie,
  fetchMovieRecommendations,
  fetchMovieVideos,
  fetchMovieReviews
} from "../../core/thunks";
import ReviewList from "./ReviewList";
import MovieTrailer from "./MovieTrailer";
import RecommendationList from "./RecommendationList";

/**
 * MoviePage Component, it shows a card with movie details.
 */
export const MoviePage = () => {
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  const movieResp = useSelector(state => state.filmReducer);
  useEffect(() => {
    dispatch(fetchMovie(id));
    dispatch(fetchMovieReviews(id));
    dispatch(fetchMovieVideos(id));
    dispatch(fetchMovieRecommendations(id));
  }, [dispatch, id]);
  return (
    <div className={styles.MoviePage}>
      {movieResp.movie === undefined ? (
        <Loader />
      ) : (
        <>
          {movieResp.loading === true ? (
            <Loader />
          ) : (
            <DetailsMovieCard
              genres={movieResp.movie.genres}
              title={movieResp.movie.title}
              average={movieResp.movie.vote_average}
              release={movieResp.movie.release_date}
              overview={movieResp.movie.overview}
              image={movieResp.movie.poster_path}
            />
          )}
          {movieResp.loading === true ? (
            <Loader />
          ) : (
            <MovieTrailer movieVideo={movieResp.movieTrailer} />
          )}
          {movieResp.loading === true ? (
            <Loader />
          ) : (
            <ReviewList reviews={movieResp.movieReviews} />
          )}
          {movieResp.loading === true ? (
            <Loader />
          ) : (
            <RecommendationList
              recommendations={movieResp.movieRecommendations}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MoviePage;
