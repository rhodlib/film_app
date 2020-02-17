import React from "react";
import ReactPlater from "react-player";
import styles from "./MovieTrailer.module.css";
import Title from "../../../components/Title";
import PropTypes from "prop-types";

/**
 * MovieTrailer component, return a block with a video player.
 */
export const MovieTrailer = ({ movieVideo = [] }) => (
  <div className={styles.MovieTrailer}>
    <Title name={"Trailer"} />
    {movieVideo.length === 0 ? (
      <Title name={"No video found"} />
    ) : (
      <ReactPlater
        url={`https://www.youtube.com/watch?v=${movieVideo[0].key}`}
        className={styles.Video}
        controls
        width="50%"
      />
    )}
  </div>
);

MovieTrailer.propTypes = {
  movieVideo: PropTypes.arrayOf(PropTypes.object)
};

export default MovieTrailer;
