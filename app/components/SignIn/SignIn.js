import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../utils/img/youtube.png";
import styles from "./SignIn.module.css";

const SignIn = function SignIn({ signInUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateInputField = function updateInputField(evt) {
        const targetEl = evt.target;
        const type = targetEl.getAttribute("data-type");
        const value = targetEl.value;

        if (type === "email") setEmail(value);

        if (type === "password") setPassword(value);
    };

    const submitForm = function submitForm(evt) {
        evt.preventDefault();
        signInUser(email, password);
    };

    return (
        <div className={styles["sign-in__container"]}>
            <div className={styles["sign-in-header"]}>
                <img className={styles["sign-in-header__logo"]} src={Logo} />
                <h1 className={`${styles["sign-in__text"]}`}>Sign in</h1>
                <h3 className={styles["sign-in__text"]}>to continue</h3>
            </div>
            <form onSubmit={submitForm} className={styles["sign-in-form"]}>
                <input
                    type="text"
                    data-type="email"
                    value={email}
                    onChange={updateInputField}
                    placeholder="Enter Email"
                    required
                    className={styles["sign-in-form__input-field"]}
                />

                <input
                    type="password"
                    data-type="password"
                    value={password}
                    onChange={updateInputField}
                    placeholder="Enter Password"
                    required
                    className={styles["sign-in-form__input-field"]}
                />

                <Link
                    to="/create-account"
                    className={styles["sign-in-form__create-acount-link"]}
                >
                    Create account
                </Link>
                <input
                    className={styles["sign-in-form__submit-btn"]}
                    type="submit"
                    value="Next"
                />
            </form>
        </div>
    );
};

export default SignIn;
