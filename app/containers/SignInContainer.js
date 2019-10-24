import React from "react";
import SignIn from "../components/SignIn/SignIn";
import { signInUser } from "../actions/userAuthenticationActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const SignInContainer = function SignInContainer({
    userID,
    signInUser,
    authError,
    errorMessage,
    loadingAuth
}) {
    return userID ? (
        <Redirect to="/" />
    ) : (
        <SignIn
            signInUser={signInUser}
            authError={authError}
            errorMessage={errorMessage}
            loadingAuth={loadingAuth}
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
        }
    };
};

SignInContainer.propTypes = {
    userID: PropTypes.string.isRequired,
    signInUser: PropTypes.func.isRequired,
    authError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    loadingAuth: PropTypes.bool.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);
