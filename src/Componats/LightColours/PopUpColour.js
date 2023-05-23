import * as React from "react";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Lights from "../Title";
import PopUpGrid from "./PopUpGrid";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="black"
        onClick={handleClickOpen}
        aria-label="close"
      >
        <LightModeOutlinedIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "relative",
            backgroundColor: "white",
            boxShadow: "none",
          }}
          elevation={0}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="black"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <Lights />
            </Typography>
          </Toolbar>
        </AppBar>

        <List>
          <PopUpGrid
            setColourvalues={props.setColourvalues}
            handleClose={handleClose}
          />
        </List>
      </Dialog>
    </div>
  );
}
