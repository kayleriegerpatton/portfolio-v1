import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const PageTitle = (props) => {
  return (
    <Box sx={{ paddingTop: "50px", maxWidth: "750px", margin: "auto" }}>
      <Typography component="h3" variant="h4">
        {props.title}
      </Typography>
      <hr style={{ border: "2px solid var(--goldenrod)", mb: "25px" }}></hr>
    </Box>
  );
};
