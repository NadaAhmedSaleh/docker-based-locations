import React from "react";
import styles from "./PageLayout.module.scss";

const PageLayout = ({ pageName, headerRightComponent, children }) => {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.pageName}>{pageName}</div>
      <div className={styles.subContainer}>
        <div className={styles.header}>
          <span className={styles.title}>
            <h1>Nada's</h1>
            <p>{pageName}</p>
          </span>
          {headerRightComponent}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
