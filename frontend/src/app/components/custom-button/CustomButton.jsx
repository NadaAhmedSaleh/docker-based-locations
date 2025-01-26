import React from "react";
import { Button } from "primereact/button";
import styles from "./CustomButton.module.scss";

const CustomButton = ({ label, onClick }) => {
  return (
    <Button className={styles.customButton} label={label} onClick={onClick} />
  );
};

export default CustomButton;
