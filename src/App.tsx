import React, {ReactElement} from "react";

import UserList from "./UserList";
import UserCreation from "./UserCreation";
import {IUser} from "./types";

const users: IUser[] = [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"} ];

const App = (): ReactElement =>
      <div>
        <UserList users={users} />
        <UserCreation submitUser={ (): void => { /**/ } } />
      </div>;

export default App;
