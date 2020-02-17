import React, { useState } from "react";
import styles from "./SearchBox.module.css";
import history from "../../../history";

/**
 * Search box return an input with some metods and a state.
 */
export const SearchBox = () => {
  const [searchParam, setSearchParam] = useState("");

  const handleOnChangeEvent = event => {
    setSearchParam(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    history.push(`search/${searchParam}`);
  };

  return (
    <form method="get" action="" onSubmit={event => handleSubmit(event)}>
      <input
        onChange={handleOnChangeEvent}
        className={styles.Search}
        type="text"
        placeholder="Search movie"
        required
      />
    </form>
  );
};

export default SearchBox;
