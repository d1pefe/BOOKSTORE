import React, { useEffect, useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import styles from "./Authorize.module.scss";

import Tabs from "../../components/Tabs";
import { TabsNames } from "../../components/Tabs/Tabs";
import Input from "../../components/Input";
import Button, { ButtonTypes } from "../../components/Button";

import { setUser } from "../../redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RoutesList } from "../Router";

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
  const navigate = useNavigate();
    const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(TabsNames.SING_IN);

  const onTabClick = (key: TabsNames) => setActiveTab(key);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [name, setName] = useState("");

  const onNameChange = (e: string) => setName(e);
  const onConfPassChange = (e: string) => setConfPass(e);
  const onPassChange = (e: string) => setPass(e);
  const onEmailChange = (e: string) => setEmail(e);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [confPassError, setConfPassError] = useState("");

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        })
      );
      setEmail("");
      setPass("");
      navigate(RoutesList.Main);
    });
  };

  const handleSingUp = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        })
      );
      setActiveTab(TabsNames.SING_IN);
      setEmail("");
      setPass("");
      setName("");
      setConfPass("");
    });
  };

  useEffect(() => {
    if (name.length > 0 && name.length <= 3) {
      setNameError("Name is required field");
    } else {
      setNameError("");
    }
  }, [name]);

  useEffect(() => {
    if (email.length > 0 && email.length <= 3) {
      setEmailError("Email is required field");
    } else {
      setEmailError("");
    }
  }, [email]);

  useEffect(() => {
    if (pass.length > 0 && pass.length <= 6) {
      setPassError("The password must consist of at least 6 characters");
    } else {
      setPassError("");
    }
  }, [pass]);

  useEffect(() => {
    if (confPass !== pass && confPass.length <= 6) {
      setConfPassError("The password must consist of at least 6 characters");
    } else {
      setConfPassError("");
    }
  }, [confPass, pass]);

  const isValidSingUp = useMemo(() => {
    return (
      nameError.length === 0 &&
      emailError.length === 0 &&
      passError.length === 0 &&
      confPassError.length === 0 &&
      pass.length >= 6 &&
      pass === confPass &&
      name.length >= 3 &&
      email.length >= 3
    );
  }, [
    nameError,
    emailError,
    passError,
    confPassError,
    name,
    email,
    pass,
    confPass,
  ]);

  const isValidSingIn = useMemo(() => {
    return (
      emailError.length === 0 &&
      passError.length === 0 &&
      pass.length >= 6 &&
      email.length >= 3
    );
  }, [emailError, passError, email, pass]);

  const getAuthorizeForm = () => {
    switch (activeTab) {
      case TabsNames.SING_IN:
        return (
          <div>
            <Input
              placeholder={"Your email"}
              inputType={"email"}
              value={email}
              onChange={onEmailChange}
              title={"Email"}
              className={styles.input}
            />
            <Input
              placeholder={"Your password"}
              inputType={"password"}
              value={pass}
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
              value={name}
              onChange={onNameChange}
              title={"Name"}
              className={styles.input}
              errText={nameError}
            />
            <Input
              placeholder={"Your email"}
              inputType={"email"}
              value={email}
              onChange={onEmailChange}
              title={"Email"}
              className={styles.input}
              errText={emailError}
            />
            <Input
              placeholder={"Your password"}
              inputType={"password"}
              value={pass}
              onChange={onPassChange}
              title={"Password"}
              className={styles.input}
              errText={passError}
            />
            <Input
              placeholder={"Confirm your password"}
              inputType={"password"}
              value={confPass}
              onChange={onConfPassChange}
              title={"Confirm password"}
              className={styles.input}
              errText={confPassError}
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
          onClick={
            activeTab === TabsNames.SING_IN
              ? () => handleLogin(email, pass)
              : () => handleSingUp(email, pass)
          }
          disabled={
            activeTab === TabsNames.SING_IN ? !isValidSingIn : !isValidSingUp
          }
          types={ButtonTypes.Main}
          className={styles.button}
        />
      </div>
    </div>
  );
};

export default Authorize;
