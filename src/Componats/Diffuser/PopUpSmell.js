import React, { useContext, useState } from "react";
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
import LensBlurOutlinedIcon from "@mui/icons-material/LensBlurOutlined";

import DiscreteSliderValues from "./DiffuserRangeSelector";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "600px", // Set the desired width for the dialog box
    height: "200px",
    // overflowX: "hidden", // Disable horizontal scrolling
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paperScrollPaper": {
    overflow: "hidden",
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

export default function CustomizedDialogs() {
  const { diffusion } = useContext(ColorContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log("diffusion", diffusion);
    setOpen(false);
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
        <LensBlurOutlinedIcon />
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
          SELECT DIFFUSION RATE
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <DiscreteSliderValues />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
