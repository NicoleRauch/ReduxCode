import {Action, combineReducers} from "redux";

import {IUser, StoreState, Users} from "../src-solution-redux-1/types";


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

const userReducer = (state: Users, action: Action): Users => {
  switch (action.type) {
    case UserActions.USER_ADDED:
      return state.concat((action as UserAddedAction).user);
  }
  return state;
};

const reducer1 = (state: StoreState = INITIAL_STATE,
       action: Action = {type: "Dummy"}): StoreState =>
    ({users: userReducer(state.users, action)});

const reducer = combineReducers({users: userReducer});
export default reducer;

/* Definition von Action in redux:
export interface Action<T = any> {
  type: T
}
 */
