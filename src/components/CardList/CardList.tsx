import React, {FC} from "react";
import Card, { CardTypes }  from "../Card";

import styles from "./CardList.module.scss";

type CardListType = {
    cardList: CardTypes[];
}

const CardList: FC<CardListType> = ({cardList}) => {
    return cardList.length > 0 ? (
        <div className={styles.container}>
            {cardList.map((card: any, index) => {
                return (<Card key={index+"_card"} title={card.title} image={card.image}
                              subtitle={card.subtitle} price={card.price} isbn13={card.isbn13} url={card.url}/>)
            })}
            <hr/>
        </div>
    ): null;
};

export default CardList;