import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";
import PropTypes from "prop-types";

/**
 * MovieList component make a list of movies that comes to props.
 */
export const MovieList = ({ movieArray = [] }) => {
  return (
    <div className={styles.MovieList}>
      {movieArray.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          image={movie.poster_path}
        />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movieArray: PropTypes.arrayOf(PropTypes.object)
};

export default MovieList;
