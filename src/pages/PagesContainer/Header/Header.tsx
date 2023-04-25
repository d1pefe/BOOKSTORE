import React, {KeyboardEvent, useState} from "react";

import styles from "./Header.module.scss";

import {
    BasketIcon,
    BurgerIcon,
    ClosingIcon,
    LikeIcon, SearchIcon,
    ShopIcon,
    UserIcon,
} from "../../../assets/icons";
import Input from "../../../components/Input";
import Button, {ButtonTypes} from "../../../components/Button";
import {setSearchedValue} from "../../../redux/reducers/postSlice";

import {useDispatch} from "react-redux";
import {useAuth} from "../../../hooks/useAuth";

import {useNavigate} from "react-router-dom";
import {RoutesList} from "../../Router";

const Header = () => {
    const dispatch = useDispatch();
    const [isOpened, setOpened] = useState(false);
    const onClickBurger = () => {
        setOpened(!isOpened);
    };
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const onAuthButtonClick = () => {
        navigate(RoutesList.Authorize);
    };
    const onHeadButtonClick = () => {
        navigate(RoutesList.Main);
    };
    const onLikeButtonClick = () => {
        navigate(RoutesList.Favorites);
    };
    const onCartButtonClick = () => {
        navigate(RoutesList.Cart);
    };

    const [searchText, setSearchText] = useState("");

    const onSearchButtonClick = () => {
        dispatch(setSearchedValue(searchText));
        navigate(RoutesList.Search)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            onSearchButtonClick();
        }
    }

    return (
        <>
            {isOpened && (
                <div className={styles.menuWrapper}>
                    <Button
                        title={<ClosingIcon/>}
                        onClick={onClickBurger}
                        types={ButtonTypes.Closing}
                        className={styles.closingIcon}
                    />
                    <hr/>
                    <div className={styles.menuContainer}>
                        <Input
                            value={searchText}
                            inputType={"text"}
                            placeholder={"Search"}
                            onChange={setSearchText}
                            className={styles.searchBurgerInput}
                        />
                        <div onClick={searchText.length > 0 ? onSearchButtonClick : () => {}}>
                            <SearchIcon />
                        </div>
                        <Button
                            title={"FAVORITES"}
                            types={ButtonTypes.Main}
                            onClick={() => {
                            }}
                            className={styles.burgerButtonFromIcon}
                        />
                        <Button
                            title={"CART"}
                            types={ButtonTypes.Main}
                            onClick={() => {
                            }}
                            className={styles.burgerButtonFromIcon}
                        />
                    </div>
                    <Button
                        title={isLoggedIn ? "Log Out" : "Log In"}
                        types={ButtonTypes.Main}
                        onClick={isLoggedIn ? undefined : onAuthButtonClick}
                        className={styles.logButton}
                    />
                </div>
            )}
            {isOpened && <div className={styles.overlay}></div>}
            <div className={styles.header}>
                <div className={styles.headerFlex}>
                    <div onClick={onHeadButtonClick}>
                        <ShopIcon/>
                    </div>
                    <Input
                        value={searchText}
                        inputType={"text"}
                        placeholder={"Search"}
                        onChange={setSearchText}
                        className={styles.searchInput}
                        onKeyDown={onKeyDown}
                    />
                    <div onClick={searchText.length > 0 ? onSearchButtonClick : () => {}}>
                        <SearchIcon />
                    </div>
                    <div className={styles.iconsContainer}>
                        <div className={styles.likeIcon} onClick={onLikeButtonClick}>
                            <LikeIcon/>
                        </div>
                        <div className={styles.basketIcon} onClick={onCartButtonClick}>
                            <BasketIcon/>
                        </div>
                        <div
                            className={styles.userIcon}
                            onClick={isLoggedIn ? undefined : onAuthButtonClick}
                        >
                            <UserIcon/>
                        </div>
                        <Button
                            title={<BurgerIcon/>}
                            onClick={onClickBurger}
                            types={ButtonTypes.Closing}
                            className={styles.burgerIcon}
                        />
                    </div>
                </div>
                <hr/>
            </div>
        </>
    );
};

export default Header;