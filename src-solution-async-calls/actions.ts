import {Action, Dispatch} from "redux";

import * as backend from "./ajaxcalls";
import {IUser, TAction} from "./types";

export enum ActionTypes {
  USER_ADDED = "USER_ADDED",
  USERS_SET = "USERS_SET"
}


export type UserAddAction = Action<ActionTypes.USER_ADDED> & {
  user: IUser
}

export const addUser = (user: IUser): UserAddAction => ({
  type: ActionTypes.USER_ADDED,
  user
});


export const submitUser = (user: IUser): TAction =>
  (dispatch: Dispatch<Action>): void => {
    backend.postUser(user, returnCode => {
      if (returnCode === 200) {
        dispatch(addUser(user));
      }
    });
  };


export type UsersSetAction = Action<ActionTypes.USERS_SET> & {
  users: IUser[]
}


export const setUsers = (users: IUser[]): UsersSetAction => ({
  type: ActionTypes.USERS_SET,
  users
});

export const loadUsers = (): TAction =>
  (dispatch: Dispatch<Action>): void => {
    backend.fetchUsers((users: IUser[]) => {
      dispatch(setUsers(users));
    });
  };
