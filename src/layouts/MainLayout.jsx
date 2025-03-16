import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Box, Toolbar } from "@mui/material";

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuClick = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar on Top */}
      <Navbar onMenuClick={handleMenuClick} />
      
      {/* Sidebar (Now Supports Collapsing) */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} onToggle={handleMenuClick} />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* Adds space below the Navbar */}
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
