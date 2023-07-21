import Typography from "@mui/material/Typography";

const style = {
  marginTop: "25px",
  fontWeight: "300",
};

const boldStyle = {
  fontWeight: "500",
};

export const Bio = () => {
  return (
    <>
      <Typography component="p" variant="h6" sx={style}>
        I’m a full stack web developer driven by a{" "}
        <span style={boldStyle}>
          background in arts and cultural accessibility
        </span>{" "}
        to close the gaps in digital experience for all people.
      </Typography>
      <Typography component="p" variant="h6" sx={style}>
        I’ve previously spearheaded wide-ranging accessibility initiatives
        within art museums, earning national recognition by the Kennedy Center
        for Performing Arts’ Leadership Exchange in Arts and Disability. As an
        artist, I bring <span style={boldStyle}>creativity</span> and an eye for
        visual design along with the{" "}
        <span style={boldStyle}>determination and problem-solving</span>{" "}
        abilities to accomplish any project.
      </Typography>
      <Typography component="p" variant="h6" sx={style}>
        I aspire to support a values-driven team in making the web{" "}
        <span style={boldStyle}>more beautifully inclusive.</span>
      </Typography>
      <Typography component="p" variant="h6" sx={style}>
        <span style={boldStyle}>Fun Fact:</span> My favorite letter is "W" for
        all the wonderful words which wield it: wildflowers, whimsy, witty,
        weird, wavy, wise...
      </Typography>
    </>
  );
};
