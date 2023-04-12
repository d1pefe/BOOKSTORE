import React, {useState} from "react";

import { Outlet } from "react-router-dom";
import styles from "./PagesContainer.module.scss";
import {BasketIcon, LikeIcon, ShopIcon, UserIcon} from "../../assets/icons";
import Input from "../../components/Input";

const PagesContainer = () => {
    const [search,setSearch] = useState("");
    const onChangeSearch = (value: string) => {
        return setSearch(value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerFlex}>
                    <ShopIcon />
                    <Input inputType={"text"} placeholder={"Search"} onChange={onChangeSearch} className={styles.searchInput}/>
                    <div className={styles.iconsContainer}>
                        <LikeIcon />
                        <BasketIcon />
                        <UserIcon />
                    </div>
                </div>
                <hr/>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <hr/>
                <div>©2022 Bookstore</div>
                <div>All rights reserved</div>
            </div>
        </div>
    );
};

export default PagesContainer;