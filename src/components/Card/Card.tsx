import React, { FC } from "react";
import {CardsType} from "./types";

import styles from "./Card.module.scss";
import {useDispatch} from "react-redux";
import {setPostVisibility, setSelectedPost} from "../../redux/reducers/postSlice";

const Card: FC<CardsType> = ({ card}) => {
    const dispatch = useDispatch();
    const onClickCard = () => {
        dispatch(setSelectedPost(card));
        dispatch(setPostVisibility(true));
    }

    return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.img} onClick={onClickCard}>
          <img src={card.image} alt={card.title} />
        </div>
      </div>
      <div className={styles.title} onClick={onClickCard}>{card.title}</div>
      <div className={styles.author}>{card.subtitle}</div>
      <div className={styles.cost}>{card.price}</div>
    </div>
  );
};


export default Card;