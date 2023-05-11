import React, { ChangeEvent, FC } from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";
import {InputProps} from "../../utils/@globalTypes";

const Input: FC<InputProps> = ({
  title,
  placeholder,
  inputType,
  disabled,
  errText,
  className,
  onChange,
  value,
  onKeyDown,
}) => {
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
        {title && <p className={styles.inputTitle}>{title}</p>}
      <input
        type={inputType}
        className={classNames(
          styles.input,
          {
            [styles.disabledInput]: disabled,
            [styles.errorInput]: errText,
          },
          className
        )}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChangeText}
        value={value}
        onKeyDown={onKeyDown}
      />
      {errText && <p className={styles.errorText}>{errText}</p>}
    </div>
  );
};

export default Input;
