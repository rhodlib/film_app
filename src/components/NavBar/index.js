import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./NavBar.module.css";
import Menu from "./Menu";
import Categories from "./Categories";
import { fetchCategories } from "../../core/thunks";

/**
 * NavBar with a menu and submenu with categories.
 */
export const NavBar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.filmReducer);
  const [submenu, setSubmenu] = useState();

  // setSubmenu = false for hidden submenu, and dispatch categories for submenu.
  useEffect(() => {
    setSubmenu(false);
    dispatch(fetchCategories());
  }, [dispatch]);

  // Function to hidden/show submenu.
  const handleSwitchNavBar = () => {
    return submenu === false ? setSubmenu(true) : setSubmenu(false);
  };

  return (
    <div>
      <div className={styles.NavBar}>
        <h1 className={styles.Title}>FilmApp</h1>
        <Menu handleSwitchNavBar={handleSwitchNavBar} />
      </div>
      <div
        className={submenu ? styles.BottomNavBar : styles.BottomNavBarOculted}
      >
        <Categories
          categories={categories}
          handleSwitchNavBar={handleSwitchNavBar}
        />
      </div>
    </div>
  );
};

export default NavBar;
