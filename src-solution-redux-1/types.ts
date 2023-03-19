import {Action, Dispatch} from "redux";

export type IDispatchProps = {
    dispatch: Dispatch<Action>
}

export type IUser = {
    firstName: string,
    lastName: string
}

export type IUsers = IUser[];

export type StoreState = { users: IUsers };
