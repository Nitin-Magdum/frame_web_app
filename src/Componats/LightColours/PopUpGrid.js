import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ColourPicker from "./ColourPicker";
import { styled } from "@mui/system";
import { ColorContext } from "../../Context/ColourContext/ColorContext";

const ResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function PopUpGrid(props) {
  const {
    top,
    setTop,
    bottom,
    setBottom,
    left,
    setLeft,
    right,
    setRight,
    setButoonlick,
  } = useContext(ColorContext);

  const onSubmit = () => {
    setButoonlick(true);
    props.handleClose();
  };

  return (
    <>
      <ResponsiveGrid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Top</h2>
          <ColourPicker setColour={setTop} />
          {top}
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Right</h2>
          <ColourPicker setColour={setRight} />
          {right}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Bottom</h2>
          <ColourPicker setColour={setBottom} />
          {bottom}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>Left</h2>
          <ColourPicker setColour={setLeft} />
          {left}
        </Grid>
      </ResponsiveGrid>
      <Button
        variant="contained"
        onClick={onSubmit}
        sx={{
          display: "block",
          margin: "0 auto",
          marginTop: "100px",
        }}
      >
        Set Colour
      </Button>
    </>
  );
}
