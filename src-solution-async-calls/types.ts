import {Action} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export type IUser = {
    firstName: string,
    lastName: string
}

export type IUsers = IUser[];

export type StoreState = {
    users: IUsers
}

export type TAction = ThunkAction<
    void,
    StoreState,
    unknown,
    Action<string>
    >;

export type TDispatch = ThunkDispatch<
    StoreState,
    void,
    Action<string>
    >;

export type IDispatchProps = {
    dispatch: TDispatch
}
