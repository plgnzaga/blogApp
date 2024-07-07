import { Reducer } from "react";
import { Action, InitialContextInterface, State } from "./interfaces";
import sampleUser from "../components/sampleUser.json"

export const initialContext: InitialContextInterface = {
  state:{
    blogs:[],
    isAdding:false,
    isEditing:false,
    blogToPublish:[],
    setIsAdding:() => {},
    setIsEditing:() => {},
    targetId:"",
    setTargetId:() => {}
  },
  dispatch:(action: Action) => {
    console.debug("Dispatching action without a reducer!", action);
  }
}

export const initialState: State = {
  blogs: [],
  isAdding:false,
  isEditing:false,
  blogToPublish:[],
  setIsAdding:() => {},
  setIsEditing:() => {},
  targetId:"",
  setTargetId:() => {}
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
    case 'SET_FIELDS':
      return {
        ...state,
        blogToPublish:action.payload
    }
    case 'EDIT_FIELD':
      return {
        ...state,
        blogToPublish:{
          ...state.blogToPublish,
          [action.payload.name]: action.payload.value
        }
        
    }
    case 'UPDATE_POST':
      //const targetPost = state.blogs.find((x) => x.id === action.payload.id)
      const updatedRow = state.blogs.map((row) =>
        row.id === action.payload?.id ? {
          ...row,
          ...action.payload.value
        } : row);
      return {
        ...state,
        blogs:updatedRow
      }
    case 'REMOVE_BLOG':
      const updated = state.blogs.filter(
        (blog) => blog.id != action.payload?.id
      );
      return {
        ...state,
        blogs: updated,
      }
    case 'RESET_FIELDS':
      return {
        ...state,
        blogToPublish:{
          userId:sampleUser.userId,
          title:"",
          body:""
        }
      }
    default:
      return state;
  }
};
export default reducer;