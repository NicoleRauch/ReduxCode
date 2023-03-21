import React, {Component, ReactElement, useState} from "react";

import {IDispatchProps} from "./types";
import {submitUser} from "./actions";

const UserCreation = ({dispatch}: IDispatchProps) => {

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  return (
    <div>
      <div>
        <label>First name:</label>
        <input type="text"
               onBlur={(e): void => setFirstName(e.target.value)}/>
      </div>
      <div>
        <label>Last name:</label>
        <input type="text" onBlur={(e): void => setLastName(e.target.value)}/>
      </div>
      <div>
        <button
          onClick={(): void => {
            dispatch(submitUser({firstName, lastName}));
          }}
        >Submit
        </button>
      </div>
    </div>
  );
};

export default UserCreation;
