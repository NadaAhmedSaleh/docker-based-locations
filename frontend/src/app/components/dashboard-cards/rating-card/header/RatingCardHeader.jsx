import React from "react";
import "../../../../styles/_variables.scss";
import styles from "./RatingCardHeader.module.scss";
import RatingText from "@/app/components/rating-text/RatingText";
import { ratingColors } from "@/app/utils/enums";

const RatingCardHeader = () => {
  return (
    <div className={styles.ratingCardHeader}>
      <h2>profiles</h2>
      <div className={styles.ratingTitlesContainer}>
        <RatingText text="Very High" color={ratingColors.VERY_HIGH} />
        <RatingText text="High" color={ratingColors.HIGH} />
        <RatingText text="Medium" color={ratingColors.MEDIUM} />
        <RatingText text="Low" color={ratingColors.LOW} />
      </div>
    </div>
  );
};

export default RatingCardHeader;
