import * as actionTypes from "../actions/type";

export const tabReducer = (state = actionTypes.ALLTODOS, action) => {
  switch (action.type) {
    case actionTypes.TOGGLETAB:
      return action.selected;

    default:
      return state;
  }
};
