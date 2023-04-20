import React from "react";

import styles from "./Favorites.module.scss";
import { useSelector } from "react-redux";
import {PostSelectors} from "../../redux/reducers/postSlice";
import FavoriteCard from "../../components/FavoriteCard";

const Favorites = () => {
  const favorites = useSelector(PostSelectors.getFavorites);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {favorites.map((data: any) => {
            return (
            <FavoriteCard data={data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
