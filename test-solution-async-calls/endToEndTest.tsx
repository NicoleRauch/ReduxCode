/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import {render} from "@testing-library/react";

import sinon, {SinonFakeServer} from "sinon";
import {Store} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";

import reducer from "../src-solution-async-calls/reducers";
import App from "../src-solution-async-calls/App";
import { configureStore } from "@reduxjs/toolkit";

const users = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Fritz", lastName: "Müller"},
  {firstName: "Klaus", lastName: "Walter"}
];

describe("Username end2end test", () => {
  let server : SinonFakeServer;
  let store : Store;

  beforeEach(() => {
    server = sinon.fakeServer.create({respondImmediately: true});

    store = configureStore({
      reducer,
      middleware: [thunkMiddleware],
    });
  });

  afterEach(() => {
    server.restore();
  });

  it("displays all loaded users", () => {
    server.respondWith("GET", "/api/users",
      [200, {"Content-Type": "application/json"}, JSON.stringify(users)]
    );
    server.respondWith("POST", "/api/user",
      [200, {"Content-Type": "application/json"}, "User successfully added."]
    );

    const {container} = render(<Provider store={store}><App/></Provider>);

    // you can interact with the UI here

    users.map(u => [u.firstName, u.lastName]).flat().forEach(name =>
      expect(container).toHaveTextContent(name)
    )

    // In case you need to find out which API is called, you can probe the calls like this:
    expect(server.requests.length).toEqual(1);
    // console.log(server.requests[0]) // to have a look at the actual object
    expect(server.requests[0].method).toEqual("GET");
    expect(server.requests[0].url).toEqual("/api/users");
  });
});
