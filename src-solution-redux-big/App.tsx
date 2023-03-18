import React, {ReactElement} from "react";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";

import UserList from "../src/UserList";
import UserCreation from "../src/UserCreation";

import {addUser, UserAddedAction} from "./reducers";
import {IUser, StoreState} from "./types";

type AppProps = { specialUsers: IUser[] }
type AppDispatch = { dispatchUser: (u: IUser) => void }

const AppComponent = ({specialUsers, dispatchUser}: AppProps & AppDispatch): ReactElement =>
    <div>
        <UserList users={specialUsers}/>
        <UserCreation submitUser={(user): void => {
            dispatchUser(user);
        }}/>
    </div>;

const mapStateToProps = (state: StoreState): AppProps =>
    ({
        specialUsers: state.users
    });
const mapDispatchToProps = (dispatch: Dispatch<Action>): AppDispatch =>
    ({
        dispatchUser:
            (user): UserAddedAction => dispatch(addUser(user))
    });
export default connect<AppProps, AppDispatch, Record<string, unknown>, StoreState>(mapStateToProps, mapDispatchToProps)(AppComponent);
