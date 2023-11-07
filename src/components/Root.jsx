import IconButton from "@mui/material/IconButton";

import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Tooltip,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Root = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "25px" }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hoaxify
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              ></IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Button sx={{ marginLeft: "auto" }} color="inherit">
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Root;
