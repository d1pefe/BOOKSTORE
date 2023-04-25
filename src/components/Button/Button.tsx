import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";
import { ButtonProps } from "../../utils/@globalTypes";

export enum ButtonTypes {
  Main = "Main",
  Closing = "Closing",
  Arrow = "Arrow",
  Like = "Like",
}

const btnStyles = {
  [ButtonTypes.Main]: styles.primaryButton,
  [ButtonTypes.Closing]: styles.closingButton,
  [ButtonTypes.Arrow]: styles.arrowButton,
  [ButtonTypes.Like]: styles.likeButton,
};

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  types,
  disabled,
  className,
}) => {
  const buttonClassName = btnStyles[types];

  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={classNames(buttonClassName, className, {
        [styles.disabledMainButton]: disabled && types === "Main",
        [styles.disabledClosingButton]: disabled && types === "Closing",
        [styles.disabledArrowButton]: disabled && types === "Arrow",
        [styles.disabledLikeButton]: disabled && types === "Like",
      })}
    >
      {title}
    </div>
  );
};

export default Button;
