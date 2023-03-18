import {Action} from "redux";

import {IUser, StoreState} from "./types";


export const INITIAL_STATE: StoreState = {
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
    Action<UserActions.USER_ADDED> & { user: IUser }
// in Redux: interface Action<T = any> { type: T }

export const addUser = (user: IUser): UserAddedAction => ({
    type: UserActions.USER_ADDED,
    user
});

export default (
    state: StoreState = INITIAL_STATE,
    action: Action = {type: "Dummy"}
): StoreState => {
    switch (action.type) {
        case UserActions.USER_ADDED:
            return {users: state.users.concat((action as UserAddedAction).user)};
    }
    return state;
};
