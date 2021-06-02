import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar className="navbar" position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className="navbar__title">
          Polling App
        </Typography>
        <div className="buttons">
          <Link to="/login" className="buttons__button">
            Login
          </Link>
          <Link to="/signup" className="buttons__button">
            Signup
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
