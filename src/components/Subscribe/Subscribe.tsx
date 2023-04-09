import React, {FC, useState} from "react";
import classNames from "classnames";

import styles from "./Subscribe.module.scss";
import Title from "../Title";
import Input from "../Input";
import Button, { ButtonTypes } from "../Button";

type SubscribeType = {
    className?: string;
}

const Subscribe: FC<SubscribeType> = ({className}) => {
  const [email, setEmail] = useState("");
  const onChangeEmail = () => {
    setEmail(email);
  };

  return (
    <div className={classNames(styles.container, className)}>
      <Title title={"Subscribe to Newsletter"} className={styles.title} />
      <div className={styles.paragraph}>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </div>
      <div className={styles.inputContainer}>
        <Input
          placeholder={"Your email"}
          inputType={"email"}
          onChange={onChangeEmail}
          className={styles.input}
        />
        <Button
          title={"SUBSCRIBE"}
          onClick={() => {}}
          types={ButtonTypes.Main}
          className={styles.button}
        />
      </div>
    </div>
  );
};

export default Subscribe;