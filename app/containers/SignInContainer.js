import React, { useState, useEffect } from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import {
    signInUser,
    clearAuthErrors
} from "../actions/userAuthenticationActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

/**
 *
 * Renders the AuthForm component with sign-in input fields
 *
 */
const SignInContainer = function SignInContainer({
    userID,
    signInUser,
    authError,
    errorMessage,
    loadingAuth,
    clearAuthErrors
}) {
    const initialInputFields = {
        email: {
            type: "text",
            placeholder: "Email",
            value: ""
        },
        password: {
            type: "password",
            placeholder: "Password",
            value: ""
        }
    };

    // when component mounts, clear any errors
    useEffect(function() {
        clearAuthErrors();
    }, []);

    const [inputFields, setInputFields] = useState(initialInputFields);

    const onChange = function onChange(evt) {
        const targetEl = evt.target;
        const type = targetEl.getAttribute("data-type");

        const updatedValue = targetEl.value;

        const updatedInputFields = { ...inputFields };

        updatedInputFields[type].value = updatedValue;

        setInputFields(updatedInputFields);
    };

    const onSubmit = function onSubmit(evt) {
        evt.preventDefault();
        signInUser(inputFields.email.value, inputFields.password.value);
    };

    const link = {
        value: "Create Account",
        path: "/signup"
    };

    return userID ? (
        <Redirect to="/" />
    ) : (
        <AuthForm
            inputFields={inputFields}
            onChange={onChange}
            onSubmit={onSubmit}
            authError={authError}
            errorMessage={errorMessage}
            loadingAuth={loadingAuth}
            link={link}
            headerText={"Sign in"}
        />
    );
};

const mapStateToProps = function(state) {
    const { id: userID, authError, errorMessage, loadingAuth } = state.user;

    return {
        userID,
        authError,
        errorMessage,
        loadingAuth
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        signInUser: function(email, password) {
            return dispatch(signInUser({ email, password }));
        },
        clearAuthErrors: function() {
            return dispatch(clearAuthErrors());
        }
    };
};

SignInContainer.propTypes = {
    userID: PropTypes.string.isRequired,
    signInUser: PropTypes.func.isRequired,
    authError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    loadingAuth: PropTypes.bool.isRequired,
    clearAuthErrors: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);
