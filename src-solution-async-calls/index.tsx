import React from "react";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {createRoot} from "react-dom/client";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import reducer from "./reducers";
import App from "../src-solution-redux-1/App";

export const store = configureStore({
    reducer,
    middleware: [thunkMiddleware, logger],
    devTools: true,
});

const start: HTMLElement | null = document.getElementById("start");
if (start !== null) {
    const root = createRoot(start);
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}
