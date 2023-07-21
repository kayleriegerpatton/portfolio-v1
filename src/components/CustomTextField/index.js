import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "var(--dark-lavender)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "var(--goldenrod)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--goldenrod)",
    },
  },
});
