import React, { FC } from "react";
import { SinglePageTypes } from "../../pages/SinglePage/SinglePage";

import styles from "./BooksInCartList.module.scss";
import { useNavigate } from "react-router-dom";
import Button, { ButtonTypes } from "../Button";
import {ClosingIcon} from "../../assets/icons";
import {PostSelectors} from "../../redux/reducers/postSlice";
import {useSelector} from "react-redux";
import classNames from "classnames";

type FavoriteCardTypes = {
    data: SinglePageTypes;
    onClick: any;
};

const BooksInCartList: FC<FavoriteCardTypes> = ({ data , onClick}) => {
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/books/${data.isbn13}`);
  };

    const favorites = useSelector(PostSelectors.getFavorites);
    const favoritesIndex = favorites.findIndex(
        (book) => book.isbn13 === data?.isbn13
    );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.img} onClick={onCardClick}>
            <img src={data.image} alt={data.title} />
          </div>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.title} onClick={onCardClick}>
            {data.title}
          </div>
          <div className={styles.author}>{data.subtitle}</div>
        </div>
          <div className={styles.cost}>{data.price}</div>
        <Button
          title={<ClosingIcon />}
          onClick={onClick}
          types={ButtonTypes.Closing}
          className={classNames(styles.buttonClosing, {
              [styles.activeButtonClosing]: favoritesIndex > -1,
          })}
        />
      </div>
      <hr className={styles.hr}/>
    </>
  );
};

export default BooksInCartList;