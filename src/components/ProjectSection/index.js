import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "react-responsive";

import { projects } from "../../data/projects";

export const ProjectSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 996px)" });

  return (
    <Box sx={{ maxWidth: 1000, margin: "auto", mt: "30px" }}>
      <ImageList variant="masonry" cols={isMobile ? 1 : 2} gap={25}>
        {projects.map((project) => (
          <ImageListItem key={`${project.title}`}>
            <img
              key={`${project.title}-image`}
              src={project.imageSrc}
              alt={project.altText}
              loading="lazy"
            />

            <ImageListItemBar
              key={`${project.title}-bar`}
              position="bottom"
              sx={{ fontWeight: "400" }}
              title={project.technologies.join(", ")}
            ></ImageListItemBar>

            <Grid
              key={`${project.title}-grid`}
              container
              rowSpacing={2}
              alignItems="center"
              sx={{
                backgroundColor: "var(--dark-lavender)",
                px: "15px",
                pt: "5px",
                pb: "70px",
              }}
            >
              <Grid
                key={`${project.title}-titleGrid`}
                item
                xs={project.deployedUrl ? 10 : 11}
              >
                <Typography
                  key={`${project.title}-title`}
                  component="p"
                  variant="h6"
                  sx={{
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  {project.title}
                </Typography>
              </Grid>

              {project.deployedUrl && (
                <Grid key={`${project.title}-url`} item xs={1}>
                  <IconButton
                    key={`${project.title}-urlIconButton`}
                    href={project.deployedUrl}
                    sx={{ color: "white" }}
                  >
                    <LanguageIcon
                      key={`${project.title}-urlIcon`}
                      fontSize="medium"
                    />
                  </IconButton>
                </Grid>
              )}

              <Grid key={`${project.title}-gitLink`} item xs={1}>
                <IconButton
                  key={`${project.title}-gitIconButton`}
                  href={project.githubUrl}
                  sx={{ color: "white" }}
                >
                  <GitHubIcon
                    key={`${project.title}-gitIcon`}
                    fontSize="medium"
                  />
                </IconButton>
              </Grid>

              <Grid
                key={`${project.title}-techList`}
                item
                xs={12}
                sx={{ my: "-10px", mt: "-15px" }}
              >
                <Typography
                  key={`${project.title}-tech`}
                  component="p"
                  sx={{
                    fontWeight: "300",
                    color: "white",
                  }}
                >
                  {project.description}
                </Typography>
              </Grid>
            </Grid>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
