import React from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";
import PropTypes from "prop-types";

/**
 * Categories Component, receive an array and show a list of elements.
 */
export const Categories = ({ categories = [], onSwitchNavBar }) => {
  return (
    <ul className={styles.List} data-test="component-categories">
      {categories === undefined
        ? null
        : categories.map(category => (
            <li className={styles.ListItem} key={category.id}>
              <Link
                onClick={onSwitchNavBar}
                className={styles.Link}
                to={`/genre/${category.id}`}
              >
                {category.name}
              </Link>
            </li>
          ))}
    </ul>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onSwitchNavBar: PropTypes.func
};

export default Categories;
