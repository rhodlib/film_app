import React from "react";
import styles from "./DetailsMovieCard.module.css";
import PropTypes from "prop-types";
import GenresComponent from "../GenresComponent";

/**
 * DetailsMovieCard component. it shows a movie in detail that arrives by props.
 */
export const DetailsMovieCard = ({
  title,
  average,
  release,
  overview,
  image,
  genres,
  duration
}) => {
  return (
    <div className={styles.DetailsMovieCard}>
      <div className={styles.Left}>
        <img
          className={styles.DetailsImg}
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
        />
      </div>
      <div className={styles.DetailsMovieInfo}>
        <h2 className={styles.Title}>{title}</h2>
        <div className={styles.Average}>{average}</div>
        <p>Release Date: {release}</p>
        <p>Duration: {duration} min</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <GenresComponent className={styles.Genres} genres={genres} />
      </div>
    </div>
  );
};

DetailsMovieCard.propTypes = {
  title: PropTypes.string,
  average: PropTypes.number,
  release: PropTypes.string,
  overview: PropTypes.string,
  image: PropTypes.string
};

export default DetailsMovieCard;
