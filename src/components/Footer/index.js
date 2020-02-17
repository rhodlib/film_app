import React from "react";
import styles from "./Footer.module.css";

/**
 * Footer Component return a div with a paragraph.
 */
export const Footer = () => (
  <div className={styles.Footer}>
    <p className={styles.FooterParagraph}>
      Created by{" "}
      <a
        className={styles.FooterAnchor}
        target="_blank"
        rel="noopener noreferrer"
        href="https://rhodlib.me"
      >
        Rhodlib
      </a>
    </p>
  </div>
);

export default Footer;
