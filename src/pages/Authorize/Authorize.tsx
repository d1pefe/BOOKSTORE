import React, { useState } from "react";

import styles from "./Authorize.module.scss";
import Tabs from "../../components/Tabs";
import { TabsNames } from "../../components/Tabs/Tabs";
import Input from "../../components/Input";
import Button, { ButtonTypes } from "../../components/Button";

const TABS_LIST = [
  {
    key: TabsNames.SING_IN,
    title: "SING IN",
    disabled: false,
  },
  {
    key: TabsNames.SING_UP,
    title: "SING UP",
    disabled: false,
  },
];

const Authorize = () => {
    const [activeTab, setActiveTab] = useState(TabsNames.SING_IN);
    const onTabClick = (key: TabsNames) => setActiveTab(key);

  return (
    <div className={styles.wrapper}>
`       <div className={styles.container}>
        <Tabs data={TABS_LIST} className={styles.authTabs} onClick={onTabClick} activeTab={activeTab}/>
        <Input placeholder={"Your email"} inputType={"email"} onChange={()=>{}} title={"Email"} className={styles.input}/>
        <Input placeholder={"Your password"} inputType={"password"} onChange={()=>{}} title={"Password"} className={styles.input}/>
        <span>Forgot password?</span>
        <Button title={"SIGN IN"} onClick={()=>{}} types={ButtonTypes.Main} className={styles.button}/>
        </div>
    </div>
  );
};

export default Authorize;
