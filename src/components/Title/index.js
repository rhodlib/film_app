import React from "react";
import styles from "./Title.module.css";
import PropTypes from "prop-types";

/**
 * Functional react component for Title.
 * @function
 * @param {string} param0 - React props to display with the component.
 * @returns {JSX.Element} - Rendered component.
 */
export const Title = ({ name }) => <p data-test="component-title" className={styles.Title}>{name}</p>;

Title.propTypes = {
  name: PropTypes.string.isRequired
};

export default Title;
