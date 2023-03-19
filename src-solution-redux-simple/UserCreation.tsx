import React, {useState} from "react";

import {IDispatchProps} from "../src-solution-redux-1/types";
import {addUser} from "./reducers";


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
                        dispatch(addUser({firstName, lastName}))
                    }}
                >Submit
                </button>
            </div>
        </div>
    );
};

export default UserCreation;
