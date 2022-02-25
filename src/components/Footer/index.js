import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <>
      <Divider sx={{ marginTop: "50px", marginBottom: "25px" }}></Divider>
      <Stack
        component="footer"
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        marginBottom="20px"
      >
        <IconButton
          href="mailto:kayle.patton22@gmail.com"
          sx={{ color: "var(--dark-lavender)" }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://github.com/kayleriegerpatton"
          sx={{ color: "var(--dark-lavender)" }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/kaylerieger/"
          sx={{ color: "var(--dark-lavender)" }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Typography sx={{ textAlign: "center" }}>
        <span style={{ fontSize: "1.2rem" }}>©</span> Kayle Rieger Patton
      </Typography>
    </>
  );
};
