import React from "react";
import styles from "./NotFound.module.css";
import PropTypes from "prop-types";

/**
 * Functional react component for NotFound message.
 * @function
 * @param {string} param0 - String to display with the component.
 * @returns {JSX.Element} - Rendered component
 */
export const NotFound = ({ name }) => (
  <div data-test="component-not-found" className={styles.NotFound}>{name}</div>
);

NotFound.propTypes = {
  name: PropTypes.string.isRequired
};

export default NotFound;
