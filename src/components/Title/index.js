import React from 'react';
import styles from './Title.module.css';
import PropTypes from 'prop-types';

export const Title = ({name}) => (
    <p className={styles.Title}>{name}</p>
);

Title.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Title;