import React from "react";
import styles from "./RatingCard.module.scss";
import RatingCardHeader from "./header/RatingCardHeader";
import RatingCardData from "./data/RatingCardData";

const RatingCard = () => {
  return (
    <div className={styles.ratingCard}>
      <RatingCardHeader />
      <RatingCardData />
    </div>
  );
};

export default RatingCard;
