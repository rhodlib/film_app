import React from "react";
import styles from "./Review.module.css";
import PropTypes from "prop-types";

/**
 * Review return a block with a author and content review.
 */
export const Review = ({ author, content }) => (
  <div className={styles.Review}>
    <h3>{author}</h3>
    <p>{content}</p>
  </div>
);

Review.propType = {
  author: PropTypes.string,
  content: PropTypes.string
};

export default Review;
