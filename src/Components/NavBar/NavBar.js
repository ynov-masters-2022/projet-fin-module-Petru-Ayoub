//import "./navbar.style.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
//import {withRouter} from "react-router-dom";

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
    window.location.href = '/';
  };
  const handleHeroes = () => {
    setAnchorEl(null);
    window.location.href = '/heroes';
  };
  const handleComics = () => {
    setAnchorEl(null);
    window.location.href = '/comics';
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "red" }}>
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <MenuIcon />

          </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                
                  <MenuItem onClick={handleClose} >Home</MenuItem>
                
                
                  <MenuItem onClick={handleHeroes} >Heros</MenuItem>
                
                
                  <MenuItem onClick={handleComics} >Comics</MenuItem>
                
              </Menu>
          
          <Typography
            className="title"
            variant="h3"
            component="div"
            sx={{ flexGrow: 1 }}>
            MARVEL
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
