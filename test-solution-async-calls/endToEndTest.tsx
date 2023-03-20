/**
 * @jest-environment jsdom
 */

import React from "react";

import sinon, {SinonFakeServer} from "sinon";
import {Provider, ProviderProps} from "react-redux";
import thunkMiddleware from "redux-thunk";

import reducer from "../src-solution-async-calls/reducers";
import {AppComponent} from "../src-solution-async-calls/App";

const users = [
  {firstName: "Nicole", lastName: "Rauch"},
  {firstName: "Fritz", lastName: "Müller"},
  {firstName: "Klaus", lastName: "Walter"}
];

describe("Username end2end test", () => {
  let server : SinonFakeServer;
  let store : Store;
  let component: ReactWrapper<ProviderProps, Record<string, unknown>, Provider>;

  beforeEach(() => {
    server = sinon.fakeServer.create({respondImmediately: true});

    store = createStore(reducer,
      applyMiddleware(thunkMiddleware)
    );
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


    component = mount<Provider, ProviderProps, Record<string, unknown>>(<Provider store={store}>
        <App/>
      </Provider>
    );

    // you can interact with the UI here
    //  const button = component.find("button");
    //  button.simulate("click");

    expect(component.find("span").map(u => u.text())).toEqual(["Nicole","Rauch","Fritz","Müller","Klaus","Walter"]);

    // In case you need to find out which API is called, you can probe the calls like this:
    expect(server.requests.length).toEqual(1);
    // console.log(server.requests[0]) // to have a look at the actual object
    expect(server.requests[0].method).toEqual("GET");
    expect(server.requests[0].url).toEqual("/api/users");
  });
});
