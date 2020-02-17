import React from "react";
import styles from "./NotFound.module.css";
import PropTypes from "prop-types";

/**
 * NotFound component.
 */
export const NotFound = ({ name }) => (
  <div className={styles.NotFound}>{name}</div>
);

NotFound.propTypes = {
  name: PropTypes.string.isRequired
};

export default NotFound;
