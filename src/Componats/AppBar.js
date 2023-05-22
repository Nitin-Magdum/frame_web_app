import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as Logo } from "../Asset/Ingenius_Logo.svg";
import { styled } from "@mui/system";
import FullScreenDialog from "./PopUpColour";
import CustomizedDialogs from "./PopUpSmell";
import PopUpSoundUpload from "./PopUpSoundUpload";

const IconWrapper = styled("div")`
  width: 150px; /* Set the desired width for the icon */
  height: 150px; /* Set the desired height for the icon */
`;

const AppBarWrapper = styled(AppBar)`
  height: 90px; /* Set the desired height for the AppBar */
`;

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarWrapper
        sx={{
          position: "relative",
          backgroundColor: "white",
          boxShadow: "none",
        }}
        elevation={0}
      >
        <Toolbar sx={{ minHeight: "auto" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <IconWrapper>
              <Logo />
            </IconWrapper>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FullScreenDialog setColourvalues={props.setColourvalues} />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CustomizedDialogs />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PopUpSoundUpload />
          </IconButton>
        </Toolbar>
      </AppBarWrapper>
    </Box>
  );
}
