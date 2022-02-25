import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { ContactForm } from "../components/ContactForm";
import { PageTitle } from "../components/PageTitle";

export const ContactPage = () => {
  return (
    <>
      <PageTitle title="Contact"></PageTitle>
      <Box sx={{ maxWidth: "750px", margin: "auto" }}>
        <Typography
          component="h3"
          variant="h5"
          sx={{ textAlign: "left", mt: "25px", fontWeight: "300" }}
        >
          I'm currently looking for opportunities to learn digital
          accessibility, grow my development skills, and find support in the
          world of tech. I'd love to hear from you.
        </Typography>
      </Box>

      <ContactForm />
    </>
  );
};
