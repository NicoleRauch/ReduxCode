
import reducer, {addUser, INITIAL_STATE, UserActions} from "../src-solution-redux-1/reducers";
import {IUser, StoreState} from "../src-solution-redux-1/types";

const user: IUser = {firstName: "firstName", lastName: "lastName"};
const stateUserOne: IUser = {firstName: "Peter", lastName: "Klaus"};
const stateUserTwo: IUser = {firstName: "Max", lastName: "Mustermann"};

describe('reducers', () => {

  describe('Actions', () => {
    it('creates a USER_ADDED action', () => {
      expect(addUser(user))
          .toEqual({type: UserActions.USER_ADDED, user});
    });
  });

describe('reducer function', () => {
  it('returns the initial state when invoked w/o params', () => {
    const newState = reducer();
    expect(newState).toEqual(INITIAL_STATE); // from reducers.ts
  });
  it('returns the same state when action unknown', () => {
    const startState: StoreState = {users: [stateUserOne]};
    const newState = reducer(startState, {type: "UNKNOWN"});
    expect(newState).toEqual(startState);
  });
  it('adds a user when there are no users yet', () => {
    const EMPTY_STATE: StoreState = {users: []};
    const newState = reducer(EMPTY_STATE, addUser(user));
    expect(newState).toEqual({users: [user]});
  });
  it('adds a user when there are already users in the state', () => {
    const NONEMPTY_STATE: StoreState =
        {users: [stateUserOne, stateUserTwo]};
    const newState = reducer(NONEMPTY_STATE, addUser(user));
    expect(newState)
        .toEqual({users: [stateUserOne, stateUserTwo, user]});
  });
});
});
