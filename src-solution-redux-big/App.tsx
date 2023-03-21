import React, {ReactElement} from "react";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";

import UserList from "../src/UserList";
import UserCreation from "../src/UserCreation";

import {addUser, UserAddedAction} from "./reducers";
import {IUser, StoreState} from "./types";

const criterion = x => true

type AppProps = { specialUsers: IUser[] }
type AppDispatch = { dispatchUser: (u: IUser) => void }

const AppComponent = ({specialUsers, dispatchUser}: AppProps & AppDispatch): ReactElement =>
    <div>
        <UserList users={specialUsers} />
        <UserCreation submitUser={dispatchUser} />
    </div>;

const mapStateToProps = (state: StoreState): AppProps =>
({
   specialUsers: state.users.filter(criterion)
});
const mapDispatchToProps = (dispatch: Dispatch<Action>): AppDispatch =>
({
   dispatchUser: (user: IUser) => dispatch(addUser(user))
});
export default connect<AppProps, AppDispatch, Record<string, unknown>, StoreState>(mapStateToProps, mapDispatchToProps)(AppComponent);
