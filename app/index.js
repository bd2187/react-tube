"use strict";

import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
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

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
