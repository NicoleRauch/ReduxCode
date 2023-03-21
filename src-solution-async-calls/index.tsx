import React from "react";

import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import {createRoot} from "react-dom/client";

import reducer from "./reducers";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";

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
