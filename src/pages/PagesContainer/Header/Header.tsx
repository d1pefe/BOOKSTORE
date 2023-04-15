import React, {useState} from "react";

import styles from "./Header.module.scss";
import {BasketIcon, BurgerIcon, ClosingIcon, LikeIcon, ShopIcon, UserIcon,} from "../../../assets/icons";
import Input from "../../../components/Input";
import Button, {ButtonTypes} from "../../../components/Button";
import {useNavigate} from "react-router-dom";
import {RoutesList} from "../../Router";

const Header = () => {
    const [isOpened, setOpened] = useState(false);
    const onClickBurger = () => {
        setOpened(!isOpened);
    };
    const isLoggedIn = false;
    const navigate = useNavigate();
    const onAuthButtonClick = () => {
        navigate(RoutesList.Authorize)
    };
    const onHeadButtonClick = () => {
        navigate(RoutesList.Main)
    }

    return (
      <>
        {isOpened && (
          <div className={styles.menuWrapper}>
            <Button
              title={<ClosingIcon />}
              onClick={onClickBurger}
              types={ButtonTypes.Closing}
              className={styles.closingIcon}
            />
            <hr />
            <div className={styles.menuContainer}>
              <Input
                inputType={"text"}
                placeholder={"Search"}
                onChange={() => {}}
                className={styles.searchBurgerInput}
              />
              <Button
                title={"FAVORITES"}
                types={ButtonTypes.Main}
                onClick={() => {}}
                className={styles.burgerButtonFromIcon}
              />
              <Button
                title={"CART"}
                types={ButtonTypes.Main}
                onClick={() => {}}
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
              <ShopIcon />
            </div>
            <Input
              inputType={"text"}
              placeholder={"Search"}
              onChange={() => {}}
              className={styles.searchInput}
            />
            <div className={styles.iconsContainer}>
              <div className={styles.likeIcon}>
                <LikeIcon />
              </div>
              <div className={styles.basketIcon}>
                <BasketIcon />
              </div>
              <div
                className={styles.userIcon}
                onClick={isLoggedIn ? undefined : onAuthButtonClick}
              >
                <UserIcon />
              </div>
              <Button
                title={<BurgerIcon />}
                onClick={onClickBurger}
                types={ButtonTypes.Closing}
                className={styles.burgerIcon}
              />
            </div>
          </div>
          <hr />
        </div>
      </>
    );
};

export default Header;