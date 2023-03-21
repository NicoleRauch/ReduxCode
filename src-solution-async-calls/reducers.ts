import {combineReducers} from "redux";

import {IUser, StoreState} from "./types";
import {createReducer} from "../src-solution-redux-big/createReducer";
import {ActionTypes, UserAddAction, UsersSetAction} from "./actions";

const INITIAL_STATE: StoreState = {
  users: []
};

const usersReducer = createReducer(INITIAL_STATE.users, {
  [ActionTypes.USER_ADDED]: (currentUsers: IUser[], action: UserAddAction) => currentUsers.concat(action.user),
  [ActionTypes.USERS_SET]: (_: IUser[], action: UsersSetAction) => action.users
});

export default combineReducers({
    users: usersReducer,
});
