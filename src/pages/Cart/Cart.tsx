import React from "react";

import styles from "./Cart.module.scss";
import {useSelector } from "react-redux";
import BooksInCartList from "../../components/BooksInCartList";
import {CartSelectors} from "../../redux/reducers/cartSlice";

const Cart = () => {
  const cartList = useSelector(CartSelectors.getCart);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {cartList.map(({ count, data }) => {
          return <BooksInCartList data={data} count={count} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
