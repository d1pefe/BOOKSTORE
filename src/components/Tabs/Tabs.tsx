import React, { useState } from "react";
import classNames from "classnames";

import styles from "./Tabs.module.scss";

export enum TabsNames {
  DESCRIPTION,
  AUTHORS,
  REVIEWS,
}

const TABS_LIST = [
  {
    key: TabsNames.DESCRIPTION,
    title: "Description",
    disabled: false,
  },
  {
    key: TabsNames.AUTHORS,
    title: "Authors",
    disabled: false,
  },
  {
    key: TabsNames.REVIEWS,
    title: "Reviews",
    disabled: true,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TabsNames.DESCRIPTION);

  const onTabClick = (key: TabsNames) => {
    return () => setActiveTab(key);
  };

  return (
    <div className={styles.container}>
      {TABS_LIST.map((tab) => {
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
