import React, { Fragment } from "react";
import styles from "./RatingCardData.module.scss";
import { returnRatingColor } from "@/app/utils/helpers";

const data = [
  {
    label: "Impact Profile",
    values: ["very_high", "very_high", "", "", "low"],
  },
  {
    label: "Dependency Profile",
    values: ["very_high", "very_high", "", "", "low"],
  },
  {
    label: "Nature Risk Profile",
    values: ["high", "medium", "medium", "medium", ""],
  },
  { label: "Climate Risk Profile", values: ["", "high", "", "", ""] },
];

const columnLabels = [
  "",
  "Frisia zout NL",
  "Bembourg PL",
  "Bethune CA",
  "Hattorf DE",
  "Neuhof DE",
];

const RatingCardData = () => {
  return (
    <div className={styles.ratingCardData}>
      <div className={styles.valuesGrid}>
        {data.map(({ label, values }, index) => (
          <Fragment key={index}>
            <p className={styles.rowLabel}>{label}</p>
            {values.map((value, valueIndex) => (
              <div
                key={valueIndex}
                className={styles.oneValue}
                style={{
                  backgroundColor: returnRatingColor(value),
                }}
              />
            ))}
          </Fragment>
        ))}

        {columnLabels.map((label, index) => (
          <p key={index} className={styles.columnLabel}>
            {label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RatingCardData;
