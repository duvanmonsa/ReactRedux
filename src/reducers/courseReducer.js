import * as types from  "../actions/actionsTypes";
import inistialState from "./initialState";

export  default function courseReducer(state = inistialState.courses , action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS :
      return action.courses;

    default:
      return state;
  }
}
