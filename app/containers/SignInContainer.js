import React from "react";
import SignIn from "../components/SignIn/SignIn";
import { signInUser } from "../actions/userAuthenticationActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const SignInContainer = function SignInContainer({ userID, signInUser }) {
    return userID ? <Redirect to="/" /> : <SignIn signInUser={signInUser} />;
};

const mapStateToProps = function(state) {
    return { userID: state.user.id };
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
    signInUser: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);
