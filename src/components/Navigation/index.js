import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { styled } from "@mui/material";
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });

  return (
    <Box sx={{ maxWidth: "430px", margin: "auto" }}>
      <StyledTabs
        component="nav"
        value={value}
        variant="scrollable"
        scrollButtons={isMobile}
        allowScrollButtonsMobile
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
          href="https://www.canva.com/design/DAE4Ifi_4Ok/SH47Ljun912k8XMwEI8YgA/view?utm_content=DAE4Ifi_4Ok&utm_campaign=designshare&utm_medium=link&utm_source=shareyourdesignpanel"
          value="resume"
          label="Resume"
          icon={<OpenInNewIcon fontSize="small" />}
          iconPosition="end"
        />
      </StyledTabs>
    </Box>
  );
};
