import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import AccountBox from "@mui/icons-material/AccountBox";

import { ContactModal } from "../ContactModal";
import { CustomTextField } from "../CustomTextField";

import "./ContactForm.css";

export const ContactForm = () => {
  const [open, setOpen] = useState(false);

  // track state of form entries
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  // track state of form errors
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nameInput) {
      setNameError(true);
    }

    if (!messageInput) {
      setMessageError(true);
    }

    if (!/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(emailInput)) {
      setEmailError(true);
    } else if (nameInput && emailInput && messageInput) {
      // if all fields filled, display modal
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    // clear field values
    setNameInput("");
    setEmailInput("");
    setMessageInput("");

    // reset error states
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  };

  const style = {
    backgroundColor: "var(--periwinkle-crayola)",
    borderRadius: "4px",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "750px",
        margin: "40px auto",
      }}
    >
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CustomTextField
              className="contact-form-item"
              error={nameError}
              label={nameError ? "Enter your name" : "Name"}
              required
              fullWidth
              value={nameInput}
              onChange={(event) => {
                setNameInput(event.currentTarget.value);
              }}
              id="name"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBox
                      fontSize="large"
                      sx={{ color: "var(--dark-lavender)" }}
                    />
                  </InputAdornment>
                ),
              }}
              color="secondary"
              sx={style}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              error={emailError}
              label={
                emailError ? "Enter a valid email address" : "Email Address"
              }
              required
              fullWidth
              type="email"
              value={emailInput}
              onChange={(event) => {
                setEmailInput(event.currentTarget.value);
              }}
              id="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon
                      fontSize="large"
                      sx={{ color: "var(--dark-lavender)" }}
                    />
                  </InputAdornment>
                ),
              }}
              color="secondary"
              sx={style}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              error={messageError}
              label={messageError ? "Enter a message" : "Message"}
              required
              fullWidth
              multiline
              rows={5}
              value={messageInput}
              onChange={(event) => {
                setMessageInput(event.currentTarget.value);
              }}
              id="message"
              color="secondary"
              sx={style}
            />
          </Grid>
        </Grid>
        <Box className="contact-button-box" sx={{ color: "white" }}>
          <Button
            className="contact-button"
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "var(--goldenrod)",
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
      <ContactModal open={open} handleClose={handleClose} />
    </Box>
  );
};
