import React, {useState} from "react";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";

import styles from "./ResetPassword.module.scss";

import Input from "../../components/Input";
import Button, {ButtonTypes} from "../../components/Button";

import Title from "../../components/Title";


const ResetPassword = () => {

    const [email, setEmail] = useState("");

    const [resetVisible, setResetVisible] = useState(false)

    const auth = getAuth();
    const onResetButtonClick = () => {
        sendPasswordResetEmail(auth, email, {url: 'http://localhost:3000/authorize'})
            .then(() => {
                setResetVisible(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Title title={"Reset password"} className={styles.resetTitle}/>
                {resetVisible &&
                    <div className={styles.success}>
                        <div className={styles.successText}>You will receive an email
                          <span className={styles.successEmail}>{email}</span> with a link to reset your password!
                        </div>
                    </div>}
                <Input placeholder={"Your email"} inputType={"email"} value={email} onChange={setEmail} title={"Email"}
                       className={styles.input}/>
                <Button
                    title={"Reset"}
                    onClick={onResetButtonClick}
                    types={ButtonTypes.Main}
                    className={styles.button}
                />
            </div>
        </div>
    );
};

export default ResetPassword;
