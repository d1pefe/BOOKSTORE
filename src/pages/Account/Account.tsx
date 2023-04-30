import React, {useState} from "react";

import styles from "./Account.module.scss";


import {useDispatch} from "react-redux";

import {useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import Title from "../../components/Title";
import {ArrowLeftIcon} from "../../assets/icons";
import Button, {ButtonTypes} from "../../components/Button";
import Input from "../../components/Input";

import {getAuth, updatePassword} from 'firebase/auth';
import {removeUser} from "../../redux/reducers/userSlice";
import {removePosts} from "../../redux/reducers/postSlice";
import {removeAllCart} from "../../redux/reducers/cartSlice";
import {RoutesList} from "../Router";


const Account = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {email} = useAuth();

    const [emailInp, setEmail] = useState(email);
    const [pass, setPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confPass, setConfPass] = useState("");

    const goBack = () => {
        navigate(-1);
    };

    const auth = getAuth();

    const onChangeClick = () => {
        if (auth.currentUser) {
            updatePassword(auth.currentUser, newPass).then(() => {
                    dispatch(removeUser());
                    dispatch(removePosts());
                    dispatch(removeAllCart())
                    navigate(RoutesList.Authorize);
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    return (
        <div className={styles.container}>
            <Button
                title={<ArrowLeftIcon/>}
                onClick={goBack}
                types={ButtonTypes.Arrow}
                className={styles.arrow}
            />
            <Title title={"account"} className={styles.title}/>
            <div>
                <Title title={"PROFILE"} className={styles.secondaryTitle}/>
                {emailInp &&
                    <Input
                        placeholder={"Email"}
                        inputType={"email"}
                        onChange={setEmail}
                        value={emailInp}
                        title={"Email"}
                        className={styles.emailInput}
                        disabled
                    />
                }
            </div>
            <div>
                <Title title={"PASSWORD"} className={styles.secondaryTitle}/>
                <Input
                    placeholder={"Password"}
                    inputType={"password"}
                    onChange={setPass}
                    value={pass}
                    title={"Password"}
                    className={styles.passInput}
                    disabled
                />
                <div className={styles.newPass}>
                    <Input
                        placeholder={"New password"}
                        inputType={"password"}
                        onChange={setNewPass}
                        value={newPass}
                        title={"New password"}
                        className={styles.newPassInput}
                    />
                    <Input
                        placeholder={"Confirm password"}
                        inputType={"password"}
                        onChange={setConfPass}
                        value={confPass}
                        title={"Confirm password"}
                        className={styles.newPassInput}
                    />
                </div>
            </div>
            <hr />
            <div className={styles.buttonWrapper}>
                <Button title={"Save changes"} onClick={onChangeClick} types={ButtonTypes.Main}
                        className={styles.button}/>
                <Button title={"Cancel"} onClick={goBack} types={ButtonTypes.Main} className={styles.button_cancel}/>
            </div>
        </div>
    );
};

export default Account;
