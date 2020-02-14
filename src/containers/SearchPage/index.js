import React from 'react';
import SearchBox from './SearchBox';
import styles from './SearchPage.module.css';
import Title from '../../components/Title';

export const SearchPage = () => (
    <div className={styles.SearchPage}>
        <Title name="Search" className={styles.Title}/>
        <SearchBox className={styles.SearchBox}/>
    </div>
);

export default SearchPage;