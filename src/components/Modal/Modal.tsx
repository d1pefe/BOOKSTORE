import React, { FC } from "react";

import styles from "./Modal.module.scss";
import {ModalProps} from "../../utils/@globalTypes";

const Modal: FC<ModalProps> = ({ isVisible, onClose, children }) => {
  return isVisible ? (
    <div className={styles.overlay} onClick={onClose}>
        <div className={styles.container}>
            <div>{children}</div>
        </div>
    </div>
  ) : null;
};

export default Modal;
