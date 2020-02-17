import React from "react";
import styles from "./RecommendationCard.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * RecommendationCard component, return a Link with a img.
 */
export const RecommendationCard = ({ id, image, title }) => {
  return (
    <Link to={`/movie/${id}`} className={styles.RecommendationCard}>
      <img
        className={styles.Image}
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={title}
      />
    </Link>
  );
};

RecommendationCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string
};

export default RecommendationCard;
