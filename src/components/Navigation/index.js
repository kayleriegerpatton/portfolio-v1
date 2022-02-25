import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { styled } from "@mui/material";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 60,
    width: "100%",
    backgroundColor: "var(--goldenrod)",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
  fontWeight: "500",
  marginBottom: "-15px",
  fontSize: "1.1rem",
  "&.Mui-selected": {
    color: "var(--dark-lavender)",
  },
}));

export const Navigation = () => {
  const navigate = useNavigate();

  let location = useLocation();

  const [value, setValue] = useState(
    location.pathname.replace("/", "") || "about"
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <StyledTabs
        component="nav"
        value={value}
        centered
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="navigation tabs"
        sx={{ display: "flex" }}
      >
        <StyledTab value="about" label="About" />
        <StyledTab value="work" label="Work" />
        <StyledTab value="contact" label="Contact" />
        <StyledTab
          component="a"
          target="_blank"
          href="https://drive.google.com/file/d/18NsaPjd5oxh66oGwOhSeTQ_yP8ePOsH-/view?usp=sharing"
          value="resume"
          label="Resume"
          icon={<OpenInNewIcon fontSize="small" />}
          iconPosition="end"
        />
      </StyledTabs>
    </Box>
  );
};
