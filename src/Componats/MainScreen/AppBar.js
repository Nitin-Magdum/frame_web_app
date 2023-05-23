import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as Logo } from "../../Asset/Ingenius_Logo.svg";
import { styled } from "@mui/system";
import { IconWrapper } from "../Styles";
import FullScreenDialog from "../LightColours/PopUpColour";
import CustomizedDialogs from "../Diffuser/PopUpSmell";
import PopUpSoundUpload from "../Audio/PopUpSoundUpload";

const AppBarWrapper = styled(AppBar)`
  height: 90px;
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
            <FullScreenDialog />
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
