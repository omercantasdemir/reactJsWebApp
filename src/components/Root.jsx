import IconButton from "@mui/material/IconButton";

import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Tooltip,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Root = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "25px" }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hoaxify
            </Typography>
          </NavLink>
          <Divider />
          <NavLink
            to="/signin"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Typography component="div">Sign In</Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Root;
