import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Navigation } from "../Navigation";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });

  const notMobile = useMediaQuery({ query: "(min-width: 600px)" });

  return (
    <Box component="header">
      {isMobile && (
        <Typography
          component="h1"
          variant="h4"
          sx={{ textAlign: "center", mt: "20px", fontWeight: "300" }}
        >
          Kayle Rieger Patton
        </Typography>
      )}

      {notMobile && (
        <>
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
            sx={{
              textAlign: "center",
              mt: "10px",
              mb: "10px",
              fontWeight: "300",
            }}
          >
            Full Stack Web Developer
          </Typography>
        </>
      )}

      <Navigation />
    </Box>
  );
};
