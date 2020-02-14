import React from "react";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * MovieCard Component show a Card with props.
 */
export const MovieCard = ({ image, title, id }) => {
  return (
    <Link to={`/movie/${id}`} className={styles.MovieCard}>
      <img
        className={styles.MovieCardImage}
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={title}
      />
      <h2 className={styles.MovieCardTitle}>{title}</h2>
    </Link>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default MovieCard;
