import React from "react";
import styles from "./DetailsMovieCard.module.css";
import PropTypes from "prop-types";

/**
 * DetailsMovieCard component. it shows a movie in detail that arrives by props.
 */
export const DetailsMovieCard = ({
  title,
  average,
  release,
  overview,
  image
}) => {
  return (
    <div className={styles.DetailsMovieCard}>
      <img
        className={styles.DetailsImg}
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={title}
      />
      <div className={styles.DetailsMovieInfo}>
        <div className={styles.DetailsTitle}>
          <h1>{title}</h1>
          <div className={styles.Average}>{average}</div>
        </div>
        <p>{release}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
};

DetailsMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  average: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default DetailsMovieCard;
