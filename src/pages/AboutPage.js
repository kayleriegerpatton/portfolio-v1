import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useMediaQuery } from "react-responsive";

import { PageTitle } from "../components/PageTitle";
import { Bio } from "../components/Bio";

export const AboutPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 499px)" });

  const notMobile = useMediaQuery({ query: "(min-width: 500px)" });

  const largeAvatarStyles = {
    height: "200px",
    width: "200px",
    marginTop: "30px",
    marginBottom: "-30px",
    bgcolor: "var(--dark-lavender)",
  };

  const smallAvatarStyles = {
    height: "150px",
    width: "150px",
    marginTop: "50px",
    bgcolor: "var(--dark-lavender)",
  };

  return (
    <Box sx={{ maxWidth: "750px", margin: "auto" }}>
      {isMobile && (
        <AvatarGroup
          spacing="small"
          max={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar
            alt="Kayle wearing glasses and a blazer"
            src="/assets/images/profile-pic-square.jpeg"
            sx={largeAvatarStyles}
          >
            K
          </Avatar>
          <Avatar
            src="/assets/images/brandLogo.png"
            sx={largeAvatarStyles}
          ></Avatar>
        </AvatarGroup>
      )}

      {notMobile && (
        <AvatarGroup
          spacing="small"
          max={2}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <Avatar
            alt="Kayle wearing glasses and a blazer"
            src="/assets/images/profile-pic-square.jpeg"
            sx={smallAvatarStyles}
          >
            K
          </Avatar>
          <Avatar
            src="/assets/images/brandLogo.png"
            sx={smallAvatarStyles}
          ></Avatar>
        </AvatarGroup>
      )}

      <PageTitle title="About" />
      <Bio />
    </Box>
  );
};
