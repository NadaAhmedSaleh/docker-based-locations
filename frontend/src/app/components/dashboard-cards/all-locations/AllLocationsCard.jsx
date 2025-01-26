"use client";
import React from "react";
import styles from "./AllLocationsCard.module.scss";
import { useRouter } from "next/navigation";

const AllLocationsCard = ({ locationsCount }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/locations");
  };

  return (
    <div className={styles.allLocationsCard} onClick={handleRedirect}>
      <div className={styles.locationsCountContainer}>
        <h1>{locationsCount}</h1>
        <p>Total locations</p>
      </div>
      <div className={styles.allLocationsText}>
        <h1>ALL LOCATIONS</h1>
        <p>Get access to the results of all your locations</p>
      </div>
    </div>
  );
};

export default AllLocationsCard;
