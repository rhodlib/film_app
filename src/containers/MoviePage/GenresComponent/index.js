import React from "react";
import styles from "./GenresComponent.module.css";
import PropTypes from "prop-types";

/**
 * GenresComponent, return a div with all genres of the movie.
 */
export const GenresComponent = ({ genres = [] }) => (
  <div>
    {genres.map(genre => (
      <p className={styles.Genres} key={genre.id}>
        {genre.name}
      </p>
    ))}
  </div>
);

GenresComponent.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object)
};

export default GenresComponent;
