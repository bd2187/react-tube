import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "../../utils/img/youtube.png";
import styles from "./AuthForm.module.css";

const AuthInputField = function AuthInputField({
    placeholder,
    value,
    onChange,
    type
}) {
    return (
        <input
            data-type={placeholder}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
        />
    );
};

const AuthForm = function AuthForm({
    inputFields,
    onChange,
    onSubmit,
    authError,
    errorMessage,
    loadingAuth,
    link,
    headerText
}) {
    return (
        <div className={styles["auth-container"]}>
            <form
                onSubmit={onSubmit}
                className={`
                    ${styles["auth-form"]}
                    ${loadingAuth ? styles["auth-form--loading"] : ""}
                `}
            >
                <div className={styles["loading-container"]}>
                    <div className={styles["loading-bar"]}></div>
                </div>

                {headerText ? (
                    <div className={styles["auth-header"]}>
                        <img
                            className={styles["auth-header__logo"]}
                            src={Logo}
                        />
                        <h1 className={`${styles["auth-header__text"]}`}>
                            {headerText}
                        </h1>
                        <h3 className={styles["auth-header__text"]}>
                            to continue
                        </h3>
                    </div>
                ) : null}

                {inputFields.map(function({ type, placeholder, value }) {
                    return (
                        <AuthInputField
                            key={placeholder}
                            data-type={placeholder}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            type={type}
                        />
                    );
                })}

                <p
                    className={`
                        ${styles["auth-form__error-message"]}
                        ${
                            authError
                                ? styles["auth-form__error-message--display"]
                                : ""
                        }
                    `}
                >
                    {errorMessage ? errorMessage : "Error with authentication."}
                </p>

                <div className={styles["auth-form__footer"]}>
                    <Link
                        to={link.path}
                        className={styles["auth-form__create-acount-link"]}
                    >
                        {link.value}
                    </Link>
                    <input
                        className={styles["auth-form__submit-btn"]}
                        type="submit"
                        value="Next"
                    />
                </div>
            </form>
        </div>
    );
    // iterate through input fields and render each field to virtual dom
    // contain error message
    // have onsubmit
};

// AuthForm.propTypes = {
//     inputFields: PropTypes.array.isRequired
// };

export default AuthForm;
