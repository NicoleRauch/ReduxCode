import React from "react";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {createRoot} from "react-dom/client";

import reducer from "./reducers";
import App from "./App";

export const store = configureStore({reducer});

const start: HTMLElement | null = document.getElementById("start");
if (start !== null) {
    const root = createRoot(start);
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}
