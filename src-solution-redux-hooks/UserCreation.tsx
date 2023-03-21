import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addUser} from "../src-solution-redux-1/reducers";

const UserCreation = () => {
  const dispatch = useDispatch();
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
            dispatch(addUser({firstName, lastName}));
          }}
        >Submit
        </button>
      </div>
    </div>
  );
};

export default UserCreation;
