"use strict";

import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
import { decryptToken } from "./config/jwtToken";
import { logUserInfo } from "./actions/userAuthenticationActions";
import NormalizeCss from "./styles/css/normalize.css";
import MainCss from "./styles/css/main.css";

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

var token = localStorage.getItem("token");

if (token) {
    const user = decryptToken(token);

    store.dispatch(logUserInfo({ ...user, token }));

    // Get current time
    //   const currentTime = Date.now() / 1000;
    //   const tokenExp = decoded.exp;

    //   /*
    //     If the token expired, log the user out by dispatching the logOutUser action.
    //     Otherwise, log the user in by dispatching logUserInfo(decoded)
    //   */
    //   tokenExp < currentTime
    //     ? store.dispatch(logOutUser())
    //     : store.dispatch(logUserInfo(decoded));
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
