import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ onMenuClick }) => {
  const user = { name: "Tarun Kumar Rajput", image: "https://via.placeholder.com/40" };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* Menu Button for Sidebar Toggle (Now Visible on Desktop Too) */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>

        {/* App Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Google Usage Dashboard
        </Typography>

        {/* User Profile & Logout */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ mr: 2 }}>
            {user.name}
          </Typography>
          <Avatar src={user.image} alt={user.name} sx={{ width: 40, height: 40, mr: 2 }} />
          <Button variant="contained" color="error">Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
