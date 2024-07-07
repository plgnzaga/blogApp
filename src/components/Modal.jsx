import { Button,Dialog,Grid,IconButton,TextField,Tooltip,Typography,useMediaQuery,
} from "@mui/material";
import { Close, Edit as EditIcon } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const CustomDialog = ({
  id,
  size,
  fullScreen,
  isOpen,
  headerName,
  body,
  onClose,
  primary,
  secondary,
}) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={size}
      fullScreen={fullScreen == true ? "fullScreen" : false}
      id={id}
      open={isOpen}
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          onClose();
        }
      }}
    >
      <Grid className={"dialog-header"}>
        <Typography
          sx={{ flex: 1 }}
          variant="normal"
          className="font-medium"
          component="div"
        >
          {headerName}
        </Typography>
        <IconButton
          sx={{ padding: 0 }}
          color="inherit"
          onClick={() => {
            onClose();
          }}
          aria-label="close"
        >
          <Close />
        </IconButton>
      </Grid>
      <Grid className={"dialog-body pt-4 pb-4"}>{body}</Grid>
      <Grid
        className={"dialog-footer"}
        style={{ marginTop: `${fullScreen ? "auto" : "unset"}` }}
      >
        {secondary !== undefined && (
          <Button
            autoFocus
            variant="secondary"
            disabled={secondary?.disabled}
            onClick={() => {
              secondary?.onClick();
            }}
            className={secondary?.hide ? "d-none" : ""}
            disableRipple
          >
            {secondary?.label}
          </Button>
        )}
        {primary !== undefined && (
          <Button
          autoFocus
          variant={primary?.disabled ? "secondary" : "primary"}
          disabled={primary?.disabled}
          className={primary?.hide ? "d-none" : ""}
          onClick={() => {
            primary?.onClick();
          }}
        >
          {primary?.label}
        </Button>
        )}
      </Grid>
    </Dialog>
  );
};
export default CustomDialog;
