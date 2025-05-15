import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LogoutButton from "./Logout";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.3rem",
          }}
        >
          🐾 DogDex
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          {/* Add more nav links here as needed */}
            <Button color="inherit" component={Link} to="/breeds">
                All Breeds
            </Button>
          <LogoutButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
