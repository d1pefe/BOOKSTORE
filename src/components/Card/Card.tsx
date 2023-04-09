import React, { FC } from "react";
import {CardTypes} from "./types";

import styles from "./Card.module.scss";

const Card: FC<CardTypes> = ({ title, subtitle, isbn13, price, image, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.img}>
          <img src={image} alt={title} />
        </div>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.author}>{subtitle}</div>
      <div className={styles.cost}>{price}</div>
    </div>
  );
};


export default Card;