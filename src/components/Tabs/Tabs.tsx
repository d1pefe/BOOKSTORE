import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Tabs.module.scss";
import {TabsProps} from "../../utils/@globalTypes";

export enum TabsNames {
    DESCRIPTION,
    AUTHORS,
    REVIEWS,
    SIGN_IN,
    SIGN_UP,
}

const Tabs: FC<TabsProps> = ({ data, onClick, activeTab, className }) => {
  const onTabClick = (key: TabsNames) => () => onClick(key);

  return (
    <div className={classNames(styles.container, className)}>
      {data.map((tab) => {
        return (
          <div
            key={tab.key}
            className={classNames(styles.tab, {
              [styles.activeTab]: activeTab === tab.key,
              [styles.disabledTab]: tab.disabled,
            })}
            onClick={
              tab.disabled || activeTab === tab.key
                ? undefined
                : onTabClick(tab.key)
            }
          >
            {tab.title}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
