import { Reducer } from "react";
import { Action, InitialContextInterface, State } from "./interfaces";

export const initialContext: InitialContextInterface = {
  state:{
    blogs:[]
  },
  dispatch:(action: Action) => {
    console.debug("Dispatching action without a reducer!", action);
  }
}

export const initialState: State = {
  blogs: [],
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'FETCH_BLOGS':
      return {
        ...state,
        blogs: action.payload
      }
    case 'ADD_POST':
      return{
        ...state,
        blogs: [action.payload,...state.blogs],
      }
    case 'EDIT_FIELD':
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state;
  }
};
export default reducer;