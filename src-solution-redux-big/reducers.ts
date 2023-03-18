import {Action, combineReducers} from "redux";

import {IUser, UserState, ProductType, ProductState, DataType, OtherDataState, StoreState} from "./types";
import {createReducer} from "./createReducer";

export enum ActionTypes {
    USER_ADDED = "USER_ADDED",
    PRODUCT_ADDED = "PRODUCT_ADDED",
    DATA_SET = "DATA_SET",
    DATA_REMOVED = "DATA_REMOVED"
}

export type UserAddedAction = Action<ActionTypes.USER_ADDED> & {
    user: IUser
}

export const addUser = (user: IUser): UserAddedAction => ({
    type: ActionTypes.USER_ADDED,
    user
});


const INITIAL_STATE_USERS: UserState = [];

const users = createReducer<UserState>(INITIAL_STATE_USERS, {
  [ActionTypes.USER_ADDED]: (currentUsers: UserState, action: UserAddedAction) => currentUsers.concat(action.user)
});

export type ProductAddedAction = Action<ActionTypes.PRODUCT_ADDED> & {
    product: ProductType
}

export const addProduct = (product: ProductType): ProductAddedAction => ({
    type: ActionTypes.PRODUCT_ADDED,
    product
});


const INITIAL_STATE_PRODUCTS: ProductState = [];

const products = createReducer<ProductState>(INITIAL_STATE_PRODUCTS, {
  [ActionTypes.PRODUCT_ADDED]: (currentProducts: ProductState, action: ProductAddedAction) => currentProducts.concat(action.product)
});

export type DataSetAction = Action<ActionTypes.DATA_SET> & {
    data: DataType
}

export const setData = (data: DataType): DataSetAction => ({
    type: ActionTypes.DATA_SET,
    data
});


export type DataRemovedAction = Action<ActionTypes.DATA_REMOVED>

export const removeData = (): DataRemovedAction => ({
    type: ActionTypes.DATA_REMOVED
});


const INITIAL_STATE_OTHER_DATA: OtherDataState = null;

const otherData = createReducer<OtherDataState>(INITIAL_STATE_OTHER_DATA, {
  [ActionTypes.DATA_SET]: (data: OtherDataState, _: DataSetAction) => data,
  [ActionTypes.DATA_REMOVED]: (_: OtherDataState, __: DataRemovedAction) => null
});

export default combineReducers<StoreState>({
  users,
  products,
  otherData
});

