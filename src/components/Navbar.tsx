import { Add } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material"
import { useContext } from "react";
import BlogContext from "../common/blogContext";
import api from "../utils/api";

const Navbar = () => {
    const {dispatch} = useContext(BlogContext)

    const postBlog = () => {
        api.post(`posts`,{
           userId:102,
           id:103,
           title: 'foo',
           body: 'bar',
        }).then((res) => {
            dispatch({type:"ADD_POST", payload: res.data })
        })
     }
    return (
        <Box sx={{ display: 'flex', padding: '1rem 1.5rem', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
            <Button variant="outlined" sx={{ marginLeft: 'auto', display: 'flex', justifyContent: 'flex-start', alignContent: 'center' }} onClick={() => postBlog()}>
                <Typography variant="normal" color="black" >Add Post</Typography>
                <Add sx={{lineHeight:'1em',fontSize:'1.25rem'}} />
            </Button>
        </Box>
    )
}

export default Navbar;