import React from "react";
import Review from "./Review";
import styles from "./ReviewList.module.css";
import PropTypes from "prop-types";

/**
 * ReviewList return a list of Reviews.
 */
export const ReviewList = ({ reviews = [] }) => (
  <div className={styles.ReviewList}>
    <h1>Reviews</h1>
    {reviews.map(review => (
      <Review key={review.id} author={review.author} content={review.content} />
    ))}
  </div>
);

ReviewList.propType = {
  reviews: PropTypes.arrayOf(PropTypes.object)
};

export default ReviewList;
