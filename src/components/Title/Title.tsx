import React, {FC} from "react";
import classNames from "classnames";

import styles from "./Title.module.scss";
import {TitleType} from "../../utils/@globalTypes";

const Title: FC<TitleType> = ({ title , className}) => {
  return <div className={classNames(styles.title, className)}>{title}</div>;
};

export default Title;
