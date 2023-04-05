import React, { FC, ReactNode } from "react";

import styles from "./Button.module.scss";

export enum ButtonTypes {
  Main = "Main",
  Closing = "Closing",
  Arrow = "Arrow",
  Like = "Like",
}

type ButtonProps = {
  title: string | ReactNode;
  onClick: () => void;
  types: ButtonTypes;
  disabled?: boolean;
};

const btnStyles = {
  [ButtonTypes.Main]: styles.primaryButton,
  [ButtonTypes.Closing]: styles.closingButton,
  [ButtonTypes.Arrow]: styles.arrowButton,
  [ButtonTypes.Like]: styles.likeButton,
};

const Button: FC<ButtonProps> = ({ title, onClick, types, disabled }) => {
  const buttonClassName = btnStyles[types];

  return (
    <div onClick={onClick} className={buttonClassName}>
      {title}
    </div>
  );
};

export default Button;
