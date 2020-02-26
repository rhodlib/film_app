import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./NavBar.module.css";
import Menu from "./Menu";
import Categories from "./Categories";
import { fetchCategories } from "../../core/thunks";
import useClickOutside from '../Hooks/useClickOutside';

/**
 * NavBar with a menu and submenu with categories.
 */
export const NavBar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.filmReducer);
  const [submenu, setSubmenu] = useState();
  const aComponentRef = useRef();
  
  // setSubmenu = false for hidden submenu, and dispatch categories for submenu.
  useEffect(() => {
    setSubmenu(false);
    dispatch(fetchCategories());
  }, [dispatch]);
  
  // Function to hidden/show submenu.
  const handleSwitchNavBar = () => setSubmenu(!submenu);
  
  // Function to hidden submenu.
  const handleCloseSubmenu = () => setSubmenu(false);
  
  useClickOutside(aComponentRef, handleCloseSubmenu)
  
  return (
    <div ref={aComponentRef} data-test="component-navbar">
      <div className={styles.NavBar}>
        <h1 className={styles.Title}>FilmApp</h1>
        <Menu onSwitchNavBar={handleSwitchNavBar} onCloseSubmenu={handleCloseSubmenu}/>
      </div>
      <div
        className={submenu ? styles.BottomNavBar : styles.BottomNavBarOculted}
      >
        <Categories
          categories={categories}
          onSwitchNavBar={handleSwitchNavBar}
        />
      </div>
    </div>
  );
};

export default NavBar;
