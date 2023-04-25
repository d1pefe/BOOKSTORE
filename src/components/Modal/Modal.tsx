import React, { FC } from "react";

import styles from "./Modal.module.scss";
import {ModalProps} from "../../utils/@globalTypes";

import { ClosingIcon } from "../../assets/icons";
import Button, { ButtonTypes } from "../Button";

const Modal: FC<ModalProps> = ({ isVisible, onClose, children }) => {
  return isVisible ? (
    <div className={styles.container}>
      <Button
        title={<ClosingIcon />}
        onClick={onClose}
        types={ButtonTypes.Closing}
      />
      <div>{children}</div>
    </div>
  ) : null;
};

export default Modal;
