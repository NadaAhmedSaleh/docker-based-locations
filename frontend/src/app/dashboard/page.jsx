"use client";
import { fetchLocations } from "@/app/server/apis/locations";
import styles from "./dashboard.module.scss";
import { useEffect, useState } from "react";
import PageLayout from "@/app/components/page-layout/PageLayout";
import AllLocationsCard from "../components/dashboard-cards/all-locations/AllLocationsCard";
import StatusCard from "../components/dashboard-cards/status-card/StatusCard";
import RatingCard from "../components/dashboard-cards/rating-card/RatingCard";
import MapCard from "../components/dashboard-cards/map-card/MapCard";
export default function Dashboard() {
  const [locationsCount, setLocationsCount] = useState(null);

  useEffect(() => {
    const fetchTotalLocations = async () => {
      try {
        const { total } = await fetchLocations(1, 1);
        setLocationsCount(total);
      } catch (error) {
        console.error("Failed to fetch locations count:", error);
        setLocationsCount(0);
      }
    };

    fetchTotalLocations();
  }, []);

  return (
    <PageLayout
      pageName="Dashboard"
      headerRightComponent={
        <img
          src="/dashboard-icon.png"
          alt="My Image"
          className={styles.dashboardIcon}
        />
      }
    >
      <div className={styles.dashboardGrid}>
        <AllLocationsCard
          locationsCount={
            locationsCount !== null ? locationsCount : "Loading..."
          }
        />
        <StatusCard />
        <MapCard />
        <RatingCard />
      </div>
    </PageLayout>
  );
}
