import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Card.module.scss";
import { CardsType } from "../../utils/@globalTypes";

const Card: FC<CardsType> = ({ card }) => {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/books/${card.isbn13}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.img} onClick={onCardClick}>
          <img src={card.image} alt={card.title} />
        </div>
      </div>
      <div className={styles.title} onClick={onCardClick}>
        {card.title}
      </div>
      <div className={styles.author}>{card.subtitle}</div>
      <div className={styles.cost}>{card.price}</div>
    </div>
  );
};

export default Card;