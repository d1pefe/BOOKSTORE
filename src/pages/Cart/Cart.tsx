import React from "react";

import styles from "./Cart.module.scss";
import BooksInCartList from "../../components/BooksInCartList";

import {useSelector} from "react-redux";
import {CartSelectors} from "../../redux/reducers/cartSlice";
import {ArrowLeftIcon} from "../../assets/icons";
import Button, {ButtonTypes} from "../../components/Button";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const cartList = useSelector(CartSelectors.getCart);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const price = cartList.reduce((accumulator, item) => {
        if (item?.count) {
            return accumulator + item?.count * +item?.data.price.substring(1);
        }
        return accumulator;
    }, 0);
    const vat = price * 0.2;

    return (
        <div className={styles.wrapper}>
            {cartList.length > 0 && (
                <div className={styles.container}>
                    <Button
                        title={<ArrowLeftIcon/>}
                        onClick={goBack}
                        types={ButtonTypes.Arrow}
                        className={styles.arrow}
                    />
                    {cartList.map(({count, data}) => {
                        return <BooksInCartList data={data} count={count}/>;
                    })}
                    </div>
    )}
            <div className={styles.mainPriceContainer}>
                <div className={styles.PriceAndVatContainer}>
                    <div className={styles.priceContainer}>
                        <div className={styles.priceTitle}>Sum total</div>
                        <div className={styles.price}>{`$ ${price.toFixed(2)}`}</div>
                    </div>
                    <div className={styles.priceContainer}>
                        <div className={styles.priceTitle}>VAT</div>
                        <div className={styles.price}>{`$ ${vat.toFixed(2)}`}</div>
                    </div>
                </div>
                <div className={styles.priceContainer}>
                    <div className={styles.total}>total:</div>
                    <div className={styles.totalSum}>{`$${(price + vat).toFixed(
                        2
                    )}`}</div>
                </div>
            </div>
        </div>)
};

export default Cart;
