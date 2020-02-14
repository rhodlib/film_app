import React from "react";
import styles from './SearchBox.module.css';

export const SearchBox = () => (
    <form method="get" action="">
        <input className={styles.Search} type="text" placeholder="Search movie" required />
    </form>
);

export default SearchBox;
