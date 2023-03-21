/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import {configureStore} from "@reduxjs/toolkit";

import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../src-solution-async-calls/reducers";

import App from "../src-solution-redux-hooks/App";
import {UserActions} from "../src-solution-redux-1/reducers";

describe("App", () => {

    it("displays its user list", () => {
        const store = configureStore({
            reducer,
            middleware: [thunkMiddleware],
            preloadedState: { users: [{firstName: "Petra", lastName: "Meier"}, {firstName: "Peter", lastName: "Miller"}] }
        });
        const {container} = render(<Provider store={store}><App/></Provider>);

        ["Petra", "Meier", "Peter", "Miller"].forEach(user =>
            expect(container).toHaveTextContent(user)
        );
    });

    it("invokes the dispatcher with a USER_ADDED action", () => {
        const store = configureStore({
            reducer,
            middleware: [thunkMiddleware],
        });
        store.dispatch = jest.fn();
        render(<Provider store={store}><App/></Provider>);

        fireEvent.click(screen.getByRole("button"));

        expect(store.dispatch).toHaveBeenCalledWith({type: UserActions.USER_ADDED, user: {firstName: "", lastName: ""}});
    });
});
