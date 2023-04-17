import React, {FC} from "react";
import Card, { CardTypes }  from "../Card";

import styles from "./CardList.module.scss";

type CardListType = {
    cardList: CardTypes[];
}

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