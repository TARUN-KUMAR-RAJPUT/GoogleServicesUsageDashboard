import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useMediaQuery,
  Toolbar,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorageIcon from "@mui/icons-material/Storage";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Sidebar = ({ open, onClose, onToggle }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const location = useLocation();
  const navigate = useNavigate();
  const [submenuOpen, setSubmenuOpen] = React.useState(false);

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Storage Usage", icon: <StorageIcon />, path: "/storage" },
    { text: "Emails", icon: <EmailIcon />, path: "/emails" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings", submenu: ["Profile", "Preferences"] },
  ];

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={onClose}
      sx={{
        width: open ? 240 : 60, // Now supports "Icons Only" view
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 60, // Adjusts width dynamically
          transition: "width 0.3s ease",
          overflowX: "hidden",
          mt:"20px"
        },
      }}
    >
    <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItemButton
              onClick={() => {
                if (item.submenu) {
                  setSubmenuOpen(!submenuOpen);
                } else {
                  navigate(item.path);
                  if (isMobile) onClose();
                }
              }}
              selected={location.pathname === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              {open && <ListItemText primary={item.text} />}
              {item.submenu && (submenuOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            {item.submenu && (
              <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((subItem, subIndex) => (
                    <ListItemButton key={subIndex} sx={{ pl: 4 }}>
                      <ListItemText primary={subItem} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
