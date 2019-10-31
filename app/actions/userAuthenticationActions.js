import axios from "axios";
import { decryptToken, saveTokenInLocalStorage } from "../config/jwtToken";
import {
    USER_SIGNED_IN,
    USER_SIGNED_OUT,
    USER_SIGNED_UP,
    USER_AUTHENTICATION_LOADING,
    USER_AUTHENTICATION_ERROR,
    CLEARED_AUTH_ERRORS
} from "./actionTypes";

const handleLoginProcess = function handleLoginProcess(serverRes, dispatch) {
    const { success, data } = serverRes.data;
    if (success) {
        // Save token in local storage
        saveTokenInLocalStorage(data.token);

        // Set auth header
        // setAuthorization(token);

        // Decode JWT token
        const user = decryptToken(data.token);

        dispatch(logUserInfo(user));
    } else {
        dispatch({
            type: USER_AUTHENTICATION_ERROR,
            errorMessage:
                data.message ||
                "There was an error with verifying your email. Please try again."
        });
    }
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
                handleLoginProcess(res, dispatch);
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
                    handleLoginProcess(res, dispatch);
                })
                .catch(function(err) {
                    console.warn(err);
                    dispatch({
                        type: USER_AUTHENTICATION_ERROR,
                        errorMessage:
                            "There was an error with verifying your email. Please try again."
                    });
                });
        }, 800);
    };
}

export function logUserInfo(user) {
    const { email, userID: id, token, username } = user;
    return {
        type: USER_SIGNED_IN,
        user: {
            email,
            id,
            token,
            username
        }
    };
}

export function clearAuthErrors() {
    return {
        type: CLEARED_AUTH_ERRORS
    };
}

export function signOutUser() {
    localStorage.removeItem("token");
    return {
        type: USER_SIGNED_OUT
    };
}
