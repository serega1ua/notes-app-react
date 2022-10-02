import React, { useContext } from "react";
import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton, { Button } from "@mui/material";
import { Context } from "../context/MainContext";
import { IContext } from "../utils/interfaces";

const Navbar = () => {
  const drawerWidth = 300;
  const { clearNotes } = useContext<IContext>(Context);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`
      }}
      role="banner"
    >
      <Container maxWidth="xl" role="none">
        <Toolbar disableGutters role="none">
          <h1 className="sr-only">iNotes app</h1>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            aria-label="iNotes"
            sx={{
              mr: 2,
              backGroundColor: "transparent",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#fff",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} role="img" />
            iNotes
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box> */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              backGroundColor: "transparent",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            iNotes
          </Typography>
          {/* <Button color="primary">
            <Delete />
          </Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
