import { Box, Button, Grid, Paper, Popover, SxProps, Typography } from "@mui/material";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { DeleteOutline, Edit, EditOutlined, MoreHoriz } from "@mui/icons-material";
import BlogContext from "../common/blogContext";

const Home = () => {
   const {state} = useContext(BlogContext)
   
   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
   
   
   

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setId(event.currentTarget.id)
   };

   const handleClose = () => {
      setAnchorEl(null);
   };
   const [id, setId] = useState("");
   const open = Boolean(anchorEl);

   

   return (
      
         <Box sx={{ p: 2 }} className="wrapper">
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
               {state.blogs.map((blog, index) =>
                  <Paper sx={{ p: 2, display: 'grid', gridTemplateColumns: '1fr', gridGap: '1rem', flexBasis: '100%' }} key={index}>
                     <div style={{ marginLeft: 'auto' }}>
                        <Button onClick={handleClick} aria-describedby={blog.id.toString()} id={blog.id.toString()}><MoreHoriz sx={{ height: '1.5em', width: '1.5em' }} /></Button>
                     </div>
                     <Grid sx={{ pl: 2, pr: 2 }}>
                        <Typography sx={{ fontWeight: '600' }}>{blog.title}</Typography>
                     </Grid>
                     <Grid sx={{ pl: 2, pr: 2 }}>
                        <Typography>Body:{blog.body}</Typography>
                     </Grid>
                  </Paper>
               )}
               <Popover
                  id={id}
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
                     <Button sx={{ display: 'flex', gap: '0.25rem' }}><EditOutlined /><Typography variant="small">Edit</Typography></Button>
                     <Button sx={{ display: 'flex', gap: '0.25rem' }}><DeleteOutline /><Typography variant="small">Remove</Typography></Button>
                  </Grid>
               </Popover>
               
            </Box>
         </Box>
      
   )
}
export default Home;