import React from "react";

import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { PostSelectors, setCartStatus } from "../../redux/reducers/postSlice";
import BooksInCartList from "../../components/BooksInCartList";
import {SinglePageTypes} from "../SinglePage/SinglePage";

const Cart = () => {
  const dispatch = useDispatch();

  const cartList = useSelector(PostSelectors.getCart);
  console.log(cartList)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {cartList.map((card, count) => {
            return (
            <BooksInCartList data={card} count={count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
