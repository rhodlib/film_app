import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Menu NavBar Component.
 */
export const Menu = ({ handleSwitchNavBar }) => (
  <ul className={styles.Menu}>
    <li className={styles.MenuItem}>
      <Link to="/" className={styles.Link}>
        Search
      </Link>
    </li>
    <li className={styles.MenuItem}>
      <Link to="/list/popular" className={styles.Link}>
        Popular
      </Link>
    </li>
    <li className={styles.MenuItem}>
      <Link to="/list/top_rated" className={styles.Link}>
        Top Rated
      </Link>
    </li>
    <li className={styles.MenuItem}>
      <Link to="/list/upcoming" className={styles.Link}>
        Upcoming
      </Link>
    </li>
    <li className={styles.MenuItem}>
      <Link to='#' className={styles.Link} onClick={() => handleSwitchNavBar()}>
        Categories
      </Link>
    </li>
  </ul>
);

Menu.propTypes = {
  handleSwitchNavBar: PropTypes.func.isRequired
};

export default Menu;
