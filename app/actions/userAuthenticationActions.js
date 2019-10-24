import axios from "axios";
import {
    USER_SIGNED_IN,
    USER_SIGNED_OUT,
    USER_SIGNED_UP,
    USER_AUTHENTICATION_LOADING,
    USER_AUTHENTICATION_ERROR
} from "./actionTypes";

const decryptToken = function decryptToken(token) {
    // decrypt token here
    return {
        id: "123abc",
        username: "123abc",
        email: "abc@gmail.com",
        favorites: [],
        token: "123456hash"
    };
};

export function signUpUser({ username, email, password, matchingPassword }) {
    return function(dispatch) {
        dispatch({ type: USER_AUTHENTICATION_LOADING });

        return axios
            .post("http://localhost:5000/user/signup", {
                username,
                email,
                password,
                matchingPassword
            })
            .then(function(res) {
                const user = decryptToken();

                dispatch({ type: USER_SIGNED_UP, user });
            })
            .catch(function(err) {
                dispatch({ type: USER_AUTHENTICATION_ERROR });
            });
    };
}

export function signInUser({ email, password }) {
    return function(dispatch) {
        dispatch({ type: USER_AUTHENTICATION_LOADING });

        return setTimeout(() => {
            return axios
                .post("http://localhost:5000/user/signin", {
                    email,
                    password
                })
                .then(function(res) {
                    const { success, data } = res.data;
                    if (success) {
                        // const user = decryptToken();
                        // dispatch({ type: USER_SIGNED_IN, user });
                    } else {
                        dispatch({
                            type: USER_AUTHENTICATION_ERROR,
                            errorMessage:
                                data.message ||
                                "There was an error with verifying your email. Please try again."
                        });
                    }
                })
                .catch(function(err) {
                    dispatch({
                        type: USER_AUTHENTICATION_ERROR,
                        errorMessage:
                            "There was an error with verifying your email. Please try again."
                    });
                });
        }, 800);
    };
}

function signOutUser({}) {}
