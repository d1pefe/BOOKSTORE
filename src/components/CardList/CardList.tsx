import React, { FC } from "react";
import Card  from "../Card";

import styles from "./CardList.module.scss";
import {CardListType}  from "../../utils/@globalTypes";

const CardList: FC<CardListType> = ({cardList}) => {
    return cardList.length > 0 ? (
        <div className={styles.container}>
            {cardList.map((card: any) => {
                return (<Card card={card} key={card.isbn13}/>)
            })}
        </div>
    ): null;
};

export default CardList;