import React from "react";

import styles from "./Favorites.module.scss";

import {useSelector} from "react-redux";
import {PostSelectors} from "../../redux/reducers/postSlice";
import {ArrowLeftIcon} from "../../assets/icons";
import Button, {ButtonTypes} from "../../components/Button";
import {useNavigate} from "react-router-dom";
import FavoriteCard from "../../components/FavoriteCard";
import EmptyState from "../../components/EmptyState";

const Favorites = () => {
    const favorites = useSelector(PostSelectors.getFavorites);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Button
                    title={<ArrowLeftIcon/>}
                    onClick={goBack}
                    types={ButtonTypes.Arrow}
                    className={styles.arrow}
                />
                {favorites.length > 0 ?
                favorites.map((data: any) => {
                    return <FavoriteCard data={data}/>;
                }) : <EmptyState />}
            </div>
        </div>
    );
};

export default Favorites;
