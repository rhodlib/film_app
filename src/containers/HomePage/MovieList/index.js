import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";
import Loader from "../../../components/Loader";
import PropTypes from "prop-types";

/**
 * MovieList component make a list of movies that comes to props.
 */
export const MovieList = ({ movieArray = [] }) => {
  return (
      <div className={styles.MovieList}>
        {movieArray.films === undefined ? (
          <Loader />
        ) : (
          movieArray.films.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.overview}
              image={movie.poster_path}
            />
          ))
        )}
      </div>
  );
};

MovieList.propTypes = {
  movieArray: PropTypes.arrayOf(PropTypes.string)
};

export default MovieList;
