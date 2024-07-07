import { Typography } from "@mui/material";
import CustomDialog from "./Modal"
import { Report } from "@mui/icons-material";
import { useContext } from "react";
import BlogContext from "../common/blogContext";

const ConfirmDialog = (props) => {
    const { openConfirmation, setOpenConfirmation } = props;
    const { dispatch,targetId} = useContext(BlogContext)

    const removeBlog = () => {
        setOpenConfirmation(false);
        dispatch({
            type: "REMOVE_BLOG", payload: {
                id: targetId
            }
        })
    }
    
    return (
        <CustomDialog
            size={"xs"}
            isOpen={openConfirmation}
            headerName={
                <Typography variant="medium" className="font-medium">
                    <Report />
                </Typography>
            }
            body={
                <Typography variant="small">Are you sure, you want to remove this post?</Typography>
            }
            onClose={() => {
                setOpenConfirmation(false);
            }}
            primary={{
                label: "Yes",
                onClick: () => {
                    removeBlog();
                }
            }}
            secondary={{
                label: "No",
                onClick: () => {
                    setOpenConfirmation(false);
                }
            }}
        />
    )
}

export default ConfirmDialog;