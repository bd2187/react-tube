import React from "react";
import SignIn from "../components/SignIn/SignIn";
import { signInUser } from "../actions/userAuthenticationActions";
import { connect } from "react-redux";

const SignInContainer = function SignInContainer({ signInUser }) {
    return <SignIn signInUser={signInUser} />;
};

const mapStateToProps = function(state) {
    return {};
};

const mapDispatchToProps = function(dispatch) {
    return {
        signInUser: function({ email, password }) {
            return dispatch(signInUser({ email, password }));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);
