import React, { FC } from "react";
import { SinglePageTypes } from "../../pages/SinglePage/SinglePage";

import styles from "./FavoriteCard.module.scss";
import { useNavigate } from "react-router-dom";
import { Rate } from "antd";
import Button, { ButtonTypes } from "../Button";
import { LikeIcon } from "../../assets/icons";
import {PostSelectors, setFavoriteStatus} from "../../redux/reducers/postSlice";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

type FavoriteCardTypes = {
    data: SinglePageTypes;
};

const FavoriteCard: FC<FavoriteCardTypes> = ({ data}) => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/books/${data.isbn13}`);
  };

    const favorites = useSelector(PostSelectors.getFavorites);
    const favoritesIndex = favorites.findIndex(
        (book) => book.isbn13 === data?.isbn13
    );

    const onLikeClick =
        (status: boolean, card = data) =>
            () => {
                dispatch(setFavoriteStatus({ status, card }));
            };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.img} onClick={onCardClick}>
            <img src={data.image} alt={data.title} />
          </div>
        </div>
        <div>
          <div className={styles.title} onClick={onCardClick}>
            {data.title}
          </div>
          <div className={styles.author}>{data.subtitle}</div>
          <div className={styles.costContainer}>
            <div className={styles.cost}>{data.price}</div>
            <Rate
              disabled
              defaultValue={data.rating}
              className={styles.rating}
            />
          </div>
        </div>
        <Button
          title={<LikeIcon />}
          onClick={onLikeClick(true)}
          types={ButtonTypes.Like}
          className={classNames(styles.buttonLike, {
              [styles.activeButtonLike]: favoritesIndex > -1,
          })}
        />
      </div>
      <hr className={styles.hr}/>
    </>
  );
};

export default FavoriteCard;