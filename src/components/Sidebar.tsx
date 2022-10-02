import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { INote } from "../utils/interfaces";
import List from "./List";
import { NavLink } from "react-router-dom";

interface IProps {
  notes: INote[];
  window?: () => Window;
}

const drawerWidth = 300;

const Sidebar = ({ notes, window }: IProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List handleDrawerToggle={handleDrawerToggle} notes={notes} />
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    // <Drawer
    //     sx={{
    //       width: drawerWidth,
    //       flexShrink: 0,
    //       '& .MuiDrawer-paper': {
    //         width: drawerWidth,
    //         boxSizing: 'border-box',
    //       },
    //     }}
    //     variant="permanent"
    //   anchor="left" role="list"
    //   >
    //     <List notes={notes} />
    //     <Divider />
    //   </Drawer>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink
            style={{ textDecoration: "none", color: "#fff", fontSize: "20px" }}
            to="/"
          >
            iNotes
          </NavLink>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          role="list"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          role="list"
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
