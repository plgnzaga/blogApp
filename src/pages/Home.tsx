import { Box, Button, Chip, Grid, Paper, Popover, SxProps, Typography } from "@mui/material";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { DeleteOutline, Edit, EditOutlined, MoreHoriz } from "@mui/icons-material";
import sampleUser from "../components/sampleUser.json"
import BlogContext from "../common/blogContext";
import CreatePostDialog from "../components/CreatePostDialog";
import ConfirmDialog from "../components/ConfirmationDialog.jsx";
const Home = () => {
   const { state, dispatch, isAdding, setIsAdding,isEditing,setIsEditing,targetId,setTargetId } = useContext(BlogContext)
   const [openConfirmation,setOpenConfirmation] = useState<Boolean>(false);
   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setTargetId(event.currentTarget.id);
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };
   const open = Boolean(anchorEl);

   const preUpdatePost = () => {
      setIsAdding(false)
      setIsEditing(true)
      setAnchorEl(null);
      const postToUpdate = state.blogs.find((x) => x.id == targetId);
      dispatch({type:"SET_FIELDS", payload: postToUpdate })
      
   }

   const preRemovePost = () => {
      setOpenConfirmation(true)
      setAnchorEl(null);
   }


   return (

      <Box sx={{ p: 2,mt:10,maxHeight:'90dvh',overflowY:'scroll'}} className="wrapper">
         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {state.blogs.map((blog, index) =>
               <Paper sx={{ p: 2, display: 'grid', gridTemplateColumns: '1fr', gridGap: '1rem', flexBasis: '100%' }} key={index}>
                  {blog.userId === sampleUser.userId &&
                     <Grid sx={{ display:'flex',justifyContent:'space-between'}}>
                        <Chip label={<>Posted by You:</>} variant="outlined"  />
                        <Button onClick={handleClick} aria-describedby={blog.id.toString()} id={blog.id.toString()}><MoreHoriz sx={{ height: '1.5em', width: '1.5em' }} /></Button>
                     </Grid>
                  }

                  <Grid sx={{ pl: 2, pr: 2 }}>
                     <Typography sx={{ fontWeight: '600' }}>{blog.title}</Typography>
                  </Grid>
                  <Grid sx={{ pl: 2, pr: 2 }}>
                     <Typography>{blog.body}</Typography>
                  </Grid>
               </Paper>
            )}
            <Popover
               id={targetId.toString()}
               open={open}
               anchorEl={anchorEl}
               onClose={handleClose}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}>
               <Grid sx={{ p: 1, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
                  <Button sx={{ display: 'flex', gap: '0.25rem' }} onClick={() => { preUpdatePost() }}><EditOutlined /><Typography variant="small">Edit</Typography></Button>
                  <Button sx={{ display: 'flex', gap: '0.25rem' }} onClick={() => { preRemovePost() }}><DeleteOutline /><Typography variant="small">Remove</Typography></Button>
               </Grid>
            </Popover>
            <CreatePostDialog
               isAdding={isAdding}
               setIsAdding={setIsAdding}
            />
            <ConfirmDialog
               openConfirmation={openConfirmation}
               setOpenConfirmation={setOpenConfirmation}
            />
         </Box>
      </Box>

   )
}
export default Home;