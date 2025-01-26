"use client";
import React from "react";
import styles from "./StatusCard.module.scss";
import { Chart } from "primereact/chart";
import CustomButton from "../../custom-button/CustomButton";
import RatingText from "../../rating-text/RatingText";
import { ratingColors } from "@/app/utils/enums";
const StatusCard = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const data = {
    labels: ["High Risk", "Medium Risk", "Low Risk"],
    datasets: [
      {
        data: [38, 40, 12], // Percentages for each section
        backgroundColor: [
          ratingColors.VERY_HIGH,
          ratingColors.MEDIUM,
          ratingColors.LOW,
        ], // Colors for each section
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%", // Creates the donut effect
  };

  return (
    <div className={styles.statusCard}>
      <div className={styles.piChartContainer}>
        <div className={styles.piChartLabelsContainer}>
          <RatingText text="High Risk" color={ratingColors.VERY_HIGH} />
          <RatingText text="Medium Risk" color={ratingColors.MEDIUM} />
          <RatingText text="Low Risk" color={ratingColors.LOW} />
        </div>
        <div className={styles.piChartCenterTextContainer}>
          <Chart
            className={styles.piChart}
            type="doughnut"
            data={data}
            options={options}
          />
          <div className={styles.centerText}>Overall Location Status</div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <CustomButton label={"report"} onClick={handleButtonClick} />
        <CustomButton label={"target"} onClick={handleButtonClick} />
        <CustomButton label={"actions"} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default StatusCard;
