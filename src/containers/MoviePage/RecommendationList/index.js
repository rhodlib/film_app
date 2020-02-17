import React from "react";
import RecommendationCard from "../RecommendationCard";
import styles from "./RecommendationList.module.css";
import PropTypes from "prop-types";

/**
 * RecommendationList, retun a list of RecommendationCards.
 */
export const RecommendationList = ({ recommendations = [] }) => {
  return (
    <div className={styles.RecommendationContainer}>
      <h1 className={styles.Title}>Recommendations</h1>
      <div className={styles.RecomendationList}>
        {recommendations.map(movie => (
          <RecommendationCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

RecommendationList.propType = {
  recommendations: PropTypes.arrayOf(PropTypes.object)
};

export default RecommendationList;
