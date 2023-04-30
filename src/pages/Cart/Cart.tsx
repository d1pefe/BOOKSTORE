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
        </div>
    );
};

export default Cart;
