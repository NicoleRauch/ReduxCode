import React from "react";
import {useSelector} from "react-redux";
import * as R from "ramda";

import {IUsers, StoreState} from "../src-solution-redux-1/types";
import UserList from "../src/UserList";
import UserCreation from "./UserCreation";

export const App = () => {
    const users = useSelector<StoreState, IUsers>(s => s.users);
    return <div>
        <UserList users={users} />
        <UserCreation />
    </div>;
}

export default App;
