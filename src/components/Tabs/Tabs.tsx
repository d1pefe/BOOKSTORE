import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Tabs.module.scss";

export enum TabsNames {
    DESCRIPTION,
    AUTHORS,
    REVIEWS,
    SING_IN,
    SING_UP,
}

type TabType = {
  key: TabsNames;
  title: string;
  disabled: boolean;
};

type TabsProps = {
  data: TabType[];
  className?: string;
  onClick: (key: TabsNames) => void;
  activeTab: TabsNames;
};

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
