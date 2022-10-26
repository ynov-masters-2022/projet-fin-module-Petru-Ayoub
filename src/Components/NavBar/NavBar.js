import "./navbar.style.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchAppBar from "../SearckAppBar/SearchAppBar";
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
    <Box sx={{ flexGrow: 1, justifyContent: "space-around"}} >
      <AppBar position="static" style={{ backgroundColor: "rgb(4, 4, 4)" }}>
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
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                
                  <MenuItem onClick={handleClose} >Home</MenuItem>
                
                
                  <MenuItem onClick={handleHeroes} >Heros</MenuItem>
                
                
                  <MenuItem onClick={handleComics} >Comics</MenuItem>
                
              </Menu>
         <div className="div-title">
                      <Typography
            className="title"
            variant="h4"
            component="div"
            
            sx={{ flexGrow: 1 }}>MARVEL</Typography>

          </div>
         
          <SearchAppBar></SearchAppBar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
