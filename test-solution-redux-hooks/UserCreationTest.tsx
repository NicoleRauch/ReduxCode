/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import * as redux from "react-redux";
import {addUser} from "../src-solution-redux-1/reducers";

import UserCreation from "../src-solution-redux-hooks/UserCreation";

jest.mock("react-redux", () => ({
  __esModule: true,    //    <----- important!
  ...jest.requireActual("react-redux")
}));

describe("UserCreation", () => {

  it("passes field contents to submit callback", () => {
    const dispatchSpy = jest.fn();
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    useDispatchSpy.mockReturnValue(dispatchSpy);

    render(<UserCreation/>);

    const inputs = screen.getAllByRole("textbox");
    fireEvent.blur(inputs[0], {target: {value: "Paul"}});
    fireEvent.blur(inputs[1], {target: {value: "Meier"}});
    fireEvent.click(screen.getByRole("button"));

    expect(dispatchSpy).toHaveBeenNthCalledWith(1, addUser({firstName: "Paul", lastName: "Meier"}));
  });
});
