import React from "react";
import styles from "./Loader.module.css";

/**
 * Functional react component for loader.
 * @function
 * @param {string} param0 - className props.
 * @returns {JSX.Element} - Rendered component.
 */
export const Loader = ({ className = "" }) => (
  <div data-test="component-loader" className={[styles.Loader, className].join(" ")}></div>
);

export default Loader;
