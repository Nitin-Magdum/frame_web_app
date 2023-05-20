import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TemporaryDrawer from "./Drawer";

export default function ButtonAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{ mr: 2, backgroundColor: "white" }}
          >
            <SettingsOutlinedIcon sx={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer open={drawerOpen} onClose={handleCloseDrawer} />
    </Box>
  );
}
