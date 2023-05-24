import React, { useContext } from "react";
import { ColorContext } from "../Context/ColourContext/ColorContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = () => {
  const { snackbar, setSnackbar } = useContext(ColorContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar(false);
  };

  return (
    <Snackbar open={snackbar} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Data Sent successfully
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
