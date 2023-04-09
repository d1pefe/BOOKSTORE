import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export enum ButtonTypes {
  Main = "Main",
  Closing = "Closing",
  Arrow = "Arrow",
  Like = "Like",
}

type ButtonProps = {
  title: string | ReactNode;
  onClick: any;
  types: ButtonTypes;
  disabled?: boolean;
  className?: string;
};

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
