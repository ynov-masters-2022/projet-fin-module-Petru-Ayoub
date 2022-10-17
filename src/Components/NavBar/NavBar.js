import "./navbar.style.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "red" }}>
        <Toolbar>
          <Link to={`/?`}>
            <IconButton>
              <HomeIcon style={{ color: "white", marginRight: "10px" }} />
            </IconButton>
          </Link>
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
