import * as types from  "../actions/actionsTypes";
import inistialState from "./initialState";

export  default function authorReducer(state = inistialState.authors , action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS :
      return action.authors;

    default:
      return state;
  }
}
