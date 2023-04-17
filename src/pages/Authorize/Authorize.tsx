import React, { useState } from "react";

import styles from "./Authorize.module.scss";
import Tabs from "../../components/Tabs";
import { TabsNames } from "../../components/Tabs/Tabs";
import Input from "../../components/Input";
import Button, { ButtonTypes } from "../../components/Button";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {setUser} from "../../redux/reducers/userSlice";

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

  const [email, setEmail] = useState("");
  const onEmailChange = (e: string) => setEmail(e);
  const [pass, setPass] = useState("");
  const onPassChange = (e: string) => setPass(e);
  const [name, setName] = useState("");
  const onNameChange = (e: string) => setName(e);

  const dispatch = useDispatch();

  const handleLogin = ( email: string, password: string ) => {
    const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password).then(({user}) => {
        console.log(user);
        dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
        }))
    })
  };

    const handleSingUp = ( email: string, password: string ) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
            }))
        })
    };

  const getAuthorizeForm = () => {
    switch (activeTab) {
      case TabsNames.SING_IN:
        return (
          <div>
            <Input
              placeholder={"Your email"}
              inputType={"email"}
              onChange={onEmailChange}
              title={"Email"}
              className={styles.input}
            />
            <Input
              placeholder={"Your password"}
              inputType={"password"}
              onChange={onPassChange}
              title={"Password"}
              className={styles.input}
            />
            <span>Forgot password?</span>
          </div>
        );
      case TabsNames.SING_UP:
        return (
          <div>
            <Input
              placeholder={"Your name"}
              inputType={"text"}
              onChange={onNameChange}
              title={"Name"}
              className={styles.input}
            />
            <Input
              placeholder={"Your email"}
              inputType={"email"}
              onChange={onEmailChange}
              title={"Email"}
              className={styles.input}
            />
            <Input
              placeholder={"Your password"}
              inputType={"password"}
              onChange={onPassChange}
              title={"Password"}
              className={styles.input}
            />
            <Input
              placeholder={"Confirm your password"}
              inputType={"password"}
              onChange={onPassChange}
              title={"Confirm password"}
              className={styles.input}
            />
          </div>
        );
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Tabs
          data={TABS_LIST}
          className={styles.authTabs}
          onClick={onTabClick}
          activeTab={activeTab}
        />
        {getAuthorizeForm()}
        <Button
          title={activeTab === TabsNames.SING_IN ? "SING IN" : "SING UP"}
          onClick={activeTab === TabsNames.SING_IN ? () => handleLogin(email, pass) : () => handleSingUp(email, pass)}
          types={ButtonTypes.Main}
          className={styles.button}
        />
      </div>
    </div>
  );
};

export default Authorize;
