import React, { FC, useState } from "react";
import classNames from "classnames";

import styles from "./Subscribe.module.scss";
import { SubscribeType } from "../../utils/@globalTypes";

import Input from "../Input";
import Button, { ButtonTypes } from "../Button";

const Subscribe: FC<SubscribeType> = ({ className }) => {
  const [email, setEmail] = useState("");
  const onChangeEmail = () => {
    setEmail(email);
  };

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.title}>Subscribe to Newsletter</div>
      <div className={styles.description}>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </div>
      <div className={styles.inputButtonContainer}>
        <Input
          placeholder={"Your email"}
          inputType={"email"}
          value={email}
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