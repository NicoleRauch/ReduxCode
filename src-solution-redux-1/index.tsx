import {configureStore} from "@reduxjs/toolkit";
import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App";

import reducer from "./reducers";

export const store = configureStore({reducer});

const start: HTMLElement | null = document.getElementById("start");
if (start !== null) {
    createRoot(start).render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}
