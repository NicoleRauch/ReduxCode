import {Action, combineReducers} from "redux";

import {IUser, StoreState, IUsers} from "../src-solution-redux-1/types";
import {createReducer} from "./createReducer";


const INITIAL_STATE: StoreState = {
  users: [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
  ]
};

export enum UserActions {
    USER_ADDED = "USER_ADDED"
}

export type UserAddedAction =
    { type: UserActions.USER_ADDED, user: IUser }

export const addUser = (user: IUser): UserAddedAction => ({
        type: UserActions.USER_ADDED,
        user
});

const userReducer1 = (state: IUsers, action: Action): IUsers => {
  switch (action.type) {
    case UserActions.USER_ADDED:
      return state.concat((action as UserAddedAction).user);
  }
  return state;
};

const reducer1 = (state: StoreState = INITIAL_STATE,
       action: Action = {type: "Dummy"}): StoreState =>
    ({users: userReducer1(state.users, action)});

const INITIAL_STATE_USERS: IUsers = [];

const userReducer2 = (state:IUsers, action:Action):IUsers => {
  switch (action.type) {
    case UserActions.USER_ADDED:
      return state.concat((action as UserAddedAction).user);
  }
  return state || INITIAL_STATE_USERS;
};

const reducer2 = combineReducers({users: userReducer2});

const userReducer3 = createReducer<IUsers>(
  INITIAL_STATE_USERS,
  {
    [UserActions.USER_ADDED]:
        (state: IUsers, action: UserAddedAction) =>
            state.concat(action.user)
  });
const reducer3 = combineReducers({users: userReducer3});

export default reducer3;

/* Definition von Action in redux:
export interface Action<T = any> {
  type: T
}
 */
