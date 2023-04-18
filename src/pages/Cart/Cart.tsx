import React from "react";

import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { PostSelectors, setCartStatus } from "../../redux/reducers/postSlice";
import BooksInCartList from "../../components/BooksInCartList";

const Cart = () => {
  const dispatch = useDispatch();

  const cartList = useSelector(PostSelectors.getCart);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {cartList.map((data: any) => {
            const onLikeClick =
                (status = false, count = 0 ,card = data) =>
                    () => {
                        dispatch(setCartStatus({ status, count ,card }));
                    };

            return (
            <BooksInCartList data={data} onClick={onLikeClick(true)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
