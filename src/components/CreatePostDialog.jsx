import { useContext, useState } from "react";
import CustomDialog from "./Modal";
import BlogContext from "../common/blogContext";
import { Stack, TextField, Typography } from "@mui/material";
import sampleUser from "./sampleUser.json"
import api from "../utils/api"

const CreatePostDialog = (props) => {
    const {state,dispatch,isAdding,setIsAdding,isEditing,setIsEditing} = useContext(BlogContext);
    
    const updateField = (fieldName,value) => {
      dispatch({type:"EDIT_FIELD", payload: {
        name:fieldName,
        value:value
      }})
    }

    const postBlog = () => {
      api.post(`posts`,{
         ...state.blogToPublish,
         userId:sampleUser.userId
      }).then((res) => {
          dispatch({type:"ADD_POST", payload: {
            ...res.data,
            id:state.blogs.length + 1
          } })
          resetFields();
      })
    }

   const updateBlog = (id) => {
    dispatch({
      type:"UPDATE_POST",
      payload:{
        id:id,
        value:state.blogToPublish
      }
    })
   }

   const resetFields = () => {
      dispatch({type:"RESET_FIELDS"})
      setIsAdding(false);
      setIsEditing(false);
   }

    return (
      <>
        <CustomDialog
          id={`${isAdding ? 'create' : 'edit'}-post-dialog`}
          size={"sm"}
          isOpen={isAdding | isEditing}
          headerName={
            <Typography variant="medium" >
              Publish Post
            </Typography>
          }
          body={
            <Stack sx={{display:'flex',gap:'1rem'}}>
              <TextField 
                label="Title" 
                variant="outlined" 
                onChange={(e) => {updateField("title",e.target.value)}} 
                value={state.blogToPublish.title} 
              />
              <TextField 
                label="Body" 
                variant="outlined" 
                onChange={(e) => {updateField("body",e.target.value)}} 
                value={state.blogToPublish.body} 
                multiline rows={5}
              />
            </Stack>
          }
          onClose={() => {
              setIsAdding(false);
          }}
          primary={{
            label: <Typography sx={{fontWeight:600}}>{`${isAdding ? 'Post' : 'Save Post'}`}</Typography>,
            onClick: () => {
              if(isAdding){
                postBlog();
                setIsAdding(false)
              }
              if(isEditing){
                updateBlog(state.blogToPublish.id);
                setIsEditing(false)
              }
              
            },
          }}
          secondary={{
            label: "Cancel",
            onClick: () => {
              resetFields();
            },
          }}
        />
        
      </>
    )
}
export default CreatePostDialog;