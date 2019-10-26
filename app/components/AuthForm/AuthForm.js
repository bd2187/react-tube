import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "../../utils/img/youtube.png";
import styles from "./AuthForm.module.css";

const AuthInputField = function AuthInputField({
    placeholder,
    value,
    onChange,
    type,
    inputKey
}) {
    return (
        <input
            className={styles["auth-form__input-field"]}
            data-type={inputKey}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
        />
    );
};

/**
 *
 * Renders form for authorization (i.e sign-in / sign-up)
 *
 */
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

                {Object.keys(inputFields).map(function(inputKey) {
                    const { type, placeholder, value } = inputFields[inputKey];

                    return (
                        <AuthInputField
                            key={inputKey}
                            inputKey={inputKey}
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
                    {link ? (
                        <Link
                            to={link.path}
                            className={styles["auth-form__create-acount-link"]}
                        >
                            {link.value}
                        </Link>
                    ) : null}

                    <input
                        className={styles["auth-form__submit-btn"]}
                        type="submit"
                        value="Next"
                    />
                </div>
            </form>
        </div>
    );
};

AuthForm.propTypes = {
    inputFields: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    authError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    loadingAuth: PropTypes.bool.isRequired,
    link: PropTypes.object,
    headerText: PropTypes.string
};

export default AuthForm;
