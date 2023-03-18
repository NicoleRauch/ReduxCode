import {Action} from "redux";


export
const createReducer = <ST>(
    initialState: ST,
    handlers: Record<string, (state:ST, action:Action<string>) => ST>
  ) =>
  (state: ST = initialState, action: Action<string>): ST =>
    handlers.hasOwnProperty(action.type) ?
      handlers[action.type](state, action) : state;
