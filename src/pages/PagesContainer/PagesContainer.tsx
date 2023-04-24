import React from "react";

import {Outlet, useNavigate} from "react-router-dom";
import styles from "./PagesContainer.module.scss";
import Header from "./Header";
import {useAuth} from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../../redux/reducers/userSlice";
import {RoutesList} from "../Router";

const PagesContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoggedIn} = useAuth();
    const onLogOutClick = () => {
        dispatch(removeUser());
        navigate(RoutesList.Authorize);
    };

    return (
        <div className={styles.container}>
            <div>
                <Header/>
            </div>
            <div className={styles.outletContainer}>
                <Outlet/>
            </div>
            <div>
                <hr/>
                <div className={styles.footer}>
                    <div>©2022 Bookstore</div>
                    <div>
                        <div>All rights reserved</div>
                        {isLoggedIn ? <div onClick={onLogOutClick}>Log Out</div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagesContainer;