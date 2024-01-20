import * as actiontypes from "../actions/type";

export const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actiontypes.ADDNEWTODO:
      return [action.payload, ...state];

    case actiontypes.GETALLTODO:
      return action.payload;

    case actiontypes.TOGGLETODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    case actiontypes.UPDATETODO:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, data: action.payload.data }
          : todo
      );
    case actiontypes.DELETETODO:
      return state.filter((todo) => todo._id !== action.payload._id);

    default:
      return state;
  }
};
