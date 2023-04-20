import React, { FC } from "react";
import { SinglePageTypes } from "../../pages/SinglePage/SinglePage";

import styles from "./BooksInCartList.module.scss";
import { useNavigate } from "react-router-dom";
import Button, { ButtonTypes } from "../Button";
import { ClosingIcon, MinusIcon, PlusIcon } from "../../assets/icons";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../redux/reducers/cartSlice";

export type FavoriteCardTypes = {
  data: SinglePageTypes;
  count?: number;
};

const BooksInCartList: FC<FavoriteCardTypes> = ({ count, data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/books/${data.isbn13}`);
  };

  const onPlusClick = () => () => {
    dispatch(incrementQuantity({ data }));
  };

  const onMinusClick = () => () => {
    dispatch(decrementQuantity({ data }));
  };

  const onClosingClick = () => () => {
    dispatch(removeItem({ data }));
  };

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
          <div className={styles.counter}>
            <div onClick={onMinusClick()}>
              <MinusIcon />
            </div>
            <div>{count}</div>
            <div onClick={onPlusClick()}>
              <PlusIcon />
            </div>
          </div>
        </div>
        <div className={styles.cost}>{data.price}</div>
        <Button
          title={<ClosingIcon />}
          onClick={onClosingClick()}
          types={ButtonTypes.Closing}
          className={styles.buttonClosing}
        />
      </div>
      <hr className={styles.hr} />
    </>
  );
};

export default BooksInCartList;