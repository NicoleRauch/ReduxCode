import React from "react";
import { connect } from "react-redux";
import * as R from "ramda";

import {IDispatchProps, StoreState} from "./types";
import UserList from "../src/UserList";
import UserCreation from "./UserCreation";

export const AppComponent = ({users, dispatch}: StoreState & IDispatchProps) =>
    <div>
        <UserList users={users} />
        <UserCreation dispatch={dispatch} />
      </div>;

export default connect<StoreState, Record<string, unknown>, Record<string, unknown>, StoreState>
    (R.identity)(AppComponent);
