import React from 'react';
import SearchBox from './SearchBox';
import styles from './SearchPage.module.css';

export const SearchPage = () => (
    <div className={styles.SearchPage}>
        <SearchBox className={styles.SearchBox}/>
    </div>
);

export default SearchPage;