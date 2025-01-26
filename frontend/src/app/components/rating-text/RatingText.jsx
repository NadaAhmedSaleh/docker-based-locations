import React from "react";
import styles from "./RatingText.module.scss";

const RatingText = ({ color, text }) => {
  return (
    <div className={styles.ratingText}>
      <div className={styles.circle} style={{ backgroundColor: color }}></div>
      <p>{text}</p>
    </div>
  );
};

export default RatingText;
