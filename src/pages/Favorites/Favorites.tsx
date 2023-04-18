import React from "react";

import styles from "./Favorites.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {PostSelectors, setStatus} from "../../redux/reducers/postSlice";
import FavoriteCard from "../../components/FavoriteCard";

const Favorites = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(PostSelectors.getFavorites);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {favorites.map((data: any) => {
            const onLikeClick =
                (status: boolean, card = data) =>
                    () => {
                        dispatch(setStatus({ status, card }));
                    };

            return (
            <FavoriteCard data={data} onClick={onLikeClick(true)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
