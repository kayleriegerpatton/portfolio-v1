import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Navigation } from "../Navigation";

export const Header = () => {
  return (
    <Box component="header">
      <Typography
        component="h1"
        variant="h2"
        sx={{ textAlign: "center", mt: "20px" }}
      >
        Kayle Rieger Patton
      </Typography>
      <Typography
        component="h2"
        variant="h5"
        sx={{ textAlign: "center", mt: "10px", mb: "10px", fontWeight: "300" }}
      >
        Full Stack Web Developer
      </Typography>
      <Navigation />
    </Box>
  );
};
