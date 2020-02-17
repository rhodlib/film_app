import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Menu NavBar Component.
 */
export const Menu = ({ handleSwitchNavBar, handleCloseSubmenu }) => (
  <ul className={styles.Menu}>
    <li className={styles.MenuItem}>
      <Link to="/" className={styles.Link} onClick={() => handleCloseSubmenu()}>
        Search
      </Link>
    </li>
    <li className={[styles.MenuItem, styles.MenuItemHidden].join(" ")}>
      <Link to="/list/popular" className={styles.Link} onClick={() => handleCloseSubmenu()}>
        Popular
      </Link>
    </li>
    <li className={[styles.MenuItem, styles.MenuItemHidden].join(" ")}>
      <Link to="/list/top_rated" className={styles.Link} onClick={() => handleCloseSubmenu()}>
        Top Rated
      </Link>
    </li>
    <li className={[styles.MenuItem, styles.MenuItemHidden].join(" ")}>
      <Link to="/list/upcoming" className={styles.Link} onClick={() => handleCloseSubmenu()}>
        Upcoming
      </Link>
    </li>
    <li className={styles.MenuItem}>
      <Link to="#" className={styles.Link} onClick={() => handleSwitchNavBar()}>
        Categories
      </Link>
    </li>
  </ul>
);

Menu.propTypes = {
  handleSwitchNavBar: PropTypes.func.isRequired,
  handleCloseSubmenu: PropTypes.func.isRequired
};

export default Menu;
