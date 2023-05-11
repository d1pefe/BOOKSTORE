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
import {removePosts, setSearchedValue} from "../../../redux/reducers/postSlice";

import {useDispatch} from "react-redux";
import {useAuth} from "../../../hooks/useAuth";

import {useNavigate} from "react-router-dom";
import {RoutesList} from "../../Router";
import {getAuth, signOut} from "firebase/auth";
import {removeUser} from "../../../redux/reducers/userSlice";
import {removeAllCart} from "../../../redux/reducers/cartSlice";

const Header = () => {
    const dispatch = useDispatch();
    const auth = getAuth();
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const [isMenuOpened, setMenuOpened] = useState(false);
    const onClickBurger = () => {
        setMenuOpened(!isMenuOpened);
    };
    const onAuthButtonClick = () => {
        navigate(RoutesList.Account);
        setMenuOpened(false);
    };
    const onHeadButtonClick = () => {
        navigate(RoutesList.Main);
        setMenuOpened(false);
    };
    const onLikeButtonClick = () => {
        navigate(RoutesList.Favorites);
        setMenuOpened(false);
    };
    const onCartButtonClick = () => {
        navigate(RoutesList.Cart);
        setMenuOpened(false);
    };

    const [searchText, setSearchText] = useState("");

    const onSearchButtonClick = () => {
        dispatch(setSearchedValue(searchText));
        navigate(RoutesList.Search)
        setMenuOpened(false);
    }

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            onSearchButtonClick();
        }
    };

    const onLogOutClick = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            dispatch(removePosts());
            dispatch(removeAllCart())
            navigate(RoutesList.Authorize);
        }).catch((error) => {
            console.log(error)
        });
    };

    return (
        <>
            {isMenuOpened && (
                <>
                    <div className={styles.menuWrapper}>
                        <Button
                            title={<ClosingIcon/>}
                            onClick={onClickBurger}
                            types={ButtonTypes.Closing}
                            className={styles.closingIcon}
                        />
                        <hr/>
                        <div className={styles.menuContainer}>
                            <div className={styles.inputWithSearchButtonMobile}>
                                <Input
                                    value={searchText}
                                    inputType={"text"}
                                    placeholder={"Search"}
                                    onChange={setSearchText}
                                    className={styles.searchInputMobile}
                                    onKeyDown={onKeyDown}
                                />
                                <div className={styles.searchIconMobile} onClick={searchText.length > 0 ? onSearchButtonClick : () => {}}>
                                    <SearchIcon />
                                </div>
                            </div>
                            <Button
                                title={"FAVORITES"}
                                types={ButtonTypes.Main}
                                onClick={onLikeButtonClick}
                                className={styles.burgerButtonFromIcon}
                            />
                            <Button
                                title={"CART"}
                                types={ButtonTypes.Main}
                                onClick={onCartButtonClick}
                                className={styles.burgerButtonFromIcon}
                            />
                        </div>
                        <Button
                            title={isLoggedIn ? "Log Out" : "Log In"}
                            types={ButtonTypes.Main}
                            onClick={isLoggedIn ? onLogOutClick : onAuthButtonClick}
                            className={styles.logButton}
                        />
                    </div>
                    <div className={styles.overlayMenu}></div>
                </>
            )}
            <div className={styles.header}>
                <div className={styles.headerFlex}>
                    <div onClick={onHeadButtonClick}>
                        <ShopIcon/>
                    </div>
                    <div className={styles.inputWithSearchButton}>
                        <Input
                            value={searchText}
                            inputType={"text"}
                            placeholder={"Search"}
                            onChange={setSearchText}
                            className={styles.searchInput}
                            onKeyDown={onKeyDown}
                        />
                        <div className={styles.searchIcon} onClick={searchText.length > 0 ? onSearchButtonClick : () => {}}>
                            <SearchIcon />
                        </div>
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
                            onClick={onAuthButtonClick}
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