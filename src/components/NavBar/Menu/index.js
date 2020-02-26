import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Menu NavBar Component.
 */
export const Menu = ({ onSwitchNavBar, onCloseSubmenu }) => (
  <ul className={styles.Menu} data-test="component-menu">
    <li className={styles.MenuItem}>
      <Link to="/" className={styles.Link} onClick={onCloseSubmenu}>
        Search
      </Link>
    </li>
    <li className={[styles.MenuItem, styles.MenuItemHidden].join(" ")}>
      <Link to="/list/popular" className={styles.Link} onClick={onCloseSubmenu}>
        Popular
      </Link>
    </li>
    <li className={[styles.MenuItem, styles.MenuItemHidden].join(" ")}>
      <Link to="/list/top_rated" className={styles.Link} onClick={onCloseSubmenu}>
        Top Rated
      </Link>
    </li>
    <li className={[styles.MenuItem, styles.MenuItemHidden].join(" ")}>
      <Link to="/list/upcoming" className={styles.Link} onClick={onCloseSubmenu}>
        Upcoming
      </Link>
    </li>
    <li className={styles.MenuItem}>
      <Link id="linkSwitchNavbar" to="#" className={styles.Link} onClick={onSwitchNavBar}>
        Categories
      </Link>
    </li>
  </ul>
);

Menu.propTypes = {
  onSwitchNavBar: PropTypes.func,
  onCloseSubmenu: PropTypes.func
};

export default Menu;
