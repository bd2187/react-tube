import {
    USER_SIGNED_IN,
    USER_SIGNED_OUT,
    USER_SIGNED_UP,
    USER_AUTHENTICATION_LOADING,
    USER_AUTHENTICATION_ERROR
} from "../actions/actionTypes";

const initialState = {
    id: "",
    username: "",
    email: "",
    favorites: [],
    token: "",
    authError: false,
    loadingAuth: false
};

function user(state = initialState, action) {
    const { user } = action;
    switch (action.type) {
        case USER_SIGNED_UP:
        case USER_SIGNED_IN:
            return {
                ...state,
                authError: false,
                loadingAuth: false,
                id: user.id,
                username: user.username,
                email: user.email,
                favorites: user.favorites,
                token: user.token
            };

        case USER_AUTHENTICATION_LOADING:
            return {
                ...state,
                authError: false,
                loadingAuth: true
            };

        case USER_AUTHENTICATION_ERROR:
            return {
                ...state,
                authError: true,
                loadingAuth: false
            };
        default:
            return state;
    }
}

export default user;
