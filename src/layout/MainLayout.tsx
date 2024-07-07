import { Box, Grid } from "@mui/material"
import React, { useEffect, useReducer, useState } from "react"
import Navbar from "../components/Navbar"
import BlogContext from "../common/blogContext"
import reducer, { initialState } from "../common/blogReducer"
import api from "../utils/api"
interface MainLayoutProps {
    children: React.ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isAdding,setIsAdding] = useState<Boolean>(false);
    const [isEditing,setIsEditing] = useState<Boolean>(false);
    const [targetId,setTargetId] = useState<number | string>(0);
    const BlogContextValue = {
        state: state.blogs,
        dispatch,
        selectedBlog: {}
    }
    const fetchBlogs = () => {
        api.get(`posts`).then(res => {
            dispatch({ type: 'FETCH_BLOGS', payload: res.data });
        })
    };

    useEffect(() => {
        fetchBlogs();
    }, [])

    return <>
        <BlogContext.Provider value={{state,dispatch,isAdding,setIsAdding,isEditing,setIsEditing,targetId,setTargetId}}>
            <Box>
                <Navbar />
                <Box>
                    {children}
                </Box>
            </Box>
        </BlogContext.Provider>
    </>
}
export default MainLayout