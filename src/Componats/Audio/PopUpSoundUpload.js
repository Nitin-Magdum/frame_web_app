import React, { useContext,useState } from "react";
import { ColorContext } from "../../Context/ColourContext/ColorContext"; 
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined";
import AudioDropzone from "./SoundUpload";
import InteractiveList from "./UploadSongList";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "900px",
    height: "500px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paperScrollPaper": {
    overflow: "hidden",
  },
  // Increase the width of the dialog
  "& .MuiDialog-paper": {
    width: "1000px",
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 6,
            top: 6,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function PopUpSoundUpload() {
  const { audio, setUploadstatus } = useContext(ColorContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log("audio",audio);
    setOpen(false);
    setUploadstatus(true);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="black"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClickOpen}
      >
        <QueueMusicOutlinedIcon />
      </IconButton>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          UPLOAD THE MUSIC
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <AudioDropzone width="565px" />
          </div>
          <Typography gutterBottom>
            <InteractiveList />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Upload
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
