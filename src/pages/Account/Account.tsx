import React from "react";

import styles from "./Account.module.scss";


import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Title from "../../components/Title";


const Account = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { isLoggedIn, email, name } = useAuth();


  return (
    <div className={styles.container}>
        <Title title={`Good morning, ${email}`} />
    </div>
  );
};

export default Account;
