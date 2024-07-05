import { createContext } from "react";
import reducer, { initialContext, initialState } from "./blogReducer";


const BlogContext = createContext(initialContext)

export default BlogContext;