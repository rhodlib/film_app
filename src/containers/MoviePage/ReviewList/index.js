import React, { useState, useEffect } from "react";
import Review from "./Review";
import styles from "./ReviewList.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NotFound from "../../../components/NotFound";

/**
 * ReviewList return a list of Reviews.
 */
export const ReviewList = ({ reviews = [] }) => {
  const [reviewHidden, setReviewHidden] = useState();

  // setReviewHidden = false for hidden reviews.
  useEffect(() => {
    setReviewHidden(false);
  }, []);

  // Function to hidden/show reviews.
  const handleSwitchReviews = () => {
    return reviewHidden === false
      ? setReviewHidden(true)
      : setReviewHidden(false);
  };

  return (
    <div className={styles.ReviewList}>
      <Link className={styles.LinkReviews} to="#" onClick={handleSwitchReviews}>
        Reviews
      </Link>
      <div className={reviewHidden ? styles.Review : styles.ReviewsHidden}>
        {reviews.length === 0 ? (
          <NotFound name={"No reviews"} />
        ) : (
          reviews.map(review => (
            <Review
              key={review.id}
              author={review.author}
              content={review.content}
            />
          ))
        )}
      </div>
    </div>
  );
};

ReviewList.propType = {
  reviews: PropTypes.arrayOf(PropTypes.object)
};

export default ReviewList;
