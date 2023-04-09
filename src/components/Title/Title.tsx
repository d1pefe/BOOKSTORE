import React, {FC} from "react";

import styles from "./Title.module.scss";
import classNames from "classnames";

type TitleType = {
  title: string;
  className?: string;
}

const Title: FC<TitleType> = ({ title , className}) => {
  return <div className={classNames(styles.title, className)}>{title}</div>;
};

export default Title;
