import "./Loading.style.css";
import { Box, CircularProgress } from "@mui/material";
export function Loading() {
  return (
    <>
      <Box id="spinnerContainer">
        <CircularProgress id="spinner" />
      </Box>
    </>
  );
}
