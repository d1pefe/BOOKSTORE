import React from "react";

import styles from "./EmptyState.module.scss";

import Title from "../Title";

const EmptyState = () => {
  return (
      <div className={styles.container}>
        <img src={"https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif"} alt="empty state"/>
          <Title title={"Oh, nothing was found..."} />
          <div className={styles.secondary}>Just don't delete me, please. Please try again...</div>
      </div>
  );
};

export default EmptyState;