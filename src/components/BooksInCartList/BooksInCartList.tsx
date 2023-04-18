import React, { FC } from "react";
import { SinglePageTypes } from "../../pages/SinglePage/SinglePage";

import styles from "./BooksInCartList.module.scss";
import { useNavigate } from "react-router-dom";
import Button, { ButtonTypes } from "../Button";
import { ClosingIcon, MinusIcon, PlusIcon } from "../../assets/icons";

type FavoriteCardTypes = {
  data: SinglePageTypes;
  onClick: any;
};

const BooksInCartList: FC<FavoriteCardTypes> = ({ data, onClick}) => {
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/books/${data.isbn13}`);
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
            <div>
              <MinusIcon />
            </div>
            <div>1</div>
            <div>
              <PlusIcon />
            </div>
          </div>
        </div>
        <div className={styles.cost}>{data.price}</div>
        <Button
          title={<ClosingIcon />}
          onClick={onClick}
          types={ButtonTypes.Closing}
          className={styles.buttonClosing}
        />
      </div>
      <hr className={styles.hr} />
    </>
  );
};

export default BooksInCartList;