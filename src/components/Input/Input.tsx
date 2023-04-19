import React, { ChangeEvent, FC } from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";

type InputProps = {
  title?: string;
  placeholder: string;
  inputType: string;
  disabled?: boolean;
  errText?: string;
  className?: string;
  onChange: (value: string) => void;
  value?: string;
};

const Input: FC<InputProps> = ({
  title,
  placeholder,
  inputType,
  disabled,
  errText,
  className,
  onChange,
    value
}) => {
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <p className={styles.inputTitle}>{title}</p>
      <input
        type={inputType}
        className={classNames(styles.input,{
          [styles.disabledInput]: disabled,
          [styles.errorInput]: errText,
        }, className)}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChangeText}
        value={value}
      />
      {errText && <p className={styles.errorText}>{errText}</p>}
    </div>
  );
};

export default Input;
