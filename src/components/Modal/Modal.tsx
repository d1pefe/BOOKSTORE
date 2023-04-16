import React, { FC, ReactNode } from "react";

import styles from "./Modal.module.scss";
import { ClosingIcon } from "../../assets/icons";
import Button, { ButtonTypes } from "../Button";

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
};

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
