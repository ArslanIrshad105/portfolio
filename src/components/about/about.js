import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./about.css";

const data = [
  {
    count: "20",
    title: "Trusted Clients",
  },
  {
    count: "4",
    title: "Years of Experience",
  },
  {
    count: "30",
    title: "Projects Done",
  },
];

const About = () => {
  return (
    <Box
      sx={{
        padding: "100px 0",
        position: "relative",
      }}
    >
      <Container>
        <Grid container alignItems="center">
          {/* Image Section */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: "relative",
                textAlign: "center",
              }}
            >
              <Box
                style={{
                  position: "relative",
                  zIndex: "1",
                }}
                component="img"
                alt="Profile Picture"
                src="assets/media/images/about-banner.png"
                sx={{
                  width: { xs: "80%", md: "70%", lg: "70%", xl: "80%" },
                  height: { xs: "100%", md: "100%", lg: "100%", xl: "100%" },
                }}
              />
              {/* SVG Image */}
              <Box
                component="img"
                src="assets/media/images/effect-1.svg"
                alt="SVG Effect"
                className="rotating-btm"
                sx={{
                  left: { xs: "-60px", md: "-40px", lg: "-40px", xl: "-60px" },
                  bottom: {
                    xs: "-40px",
                    md: "-40px",
                    lg: "-40px",
                    xl: "-40px",
                  },
                }}
              />
            </Box>
          </Grid>

          {/* Text Section */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              marginTop: { xs: "45px", md: "45px", lg: "0px", xl: "0px" },
              marginLeft: { xs: "0px", md: "-40px", lg: "-70px", xl: "0px" },
            }}
          >
            <img
              src="assets/media/images/effect-1.svg"
              alt="SVG Effect"
              className="rotating-top"
            />
            <Typography
              variant="overline"
              sx={{
                color: "#fff",
                letterSpacing: "1px",
                backgroundColor: "#0788ff33",
                padding: "12px 16px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              ABOUT
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#ffffff",
                fontWeight: "bold",
                marginTop: "16px",
                fontSize: { xs: "33px", md: "40px" },
              }}
            >
              I AM AVAILABLE FOR
              <span style={{ color: "#0085ff" }}> MERN STACK</span> PROJECTS
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", fontSize: "16px", marginTop: "16px" }}
            >
              Hello! I’m Arslan, a Full-Stack MERN Developer with over 4 years
              of experience. I specialize in building responsive web apps using
              the MERN stack (MongoDB, Express, ReactJS, and NodeJS), as well as
              creating Shopify stores and e-commerce stores and websites on
              WordPress. I ensure that your site is optimized for all devices,
              whether desktops or smartphones. Before starting any
              project—whether it's a web app, landing page, business website, or
              e-commerce platform—I’ll discuss all the details with you to meet
              your specific needs. Plus, I offer two months of free maintenance
              after launch to keep everything running smoothly.
            </Typography>
            <Box>
              <Grid container spacing={1} sx={{ marginTop: "16px" }}>
                {data.map((item, index) => {
                  // Split the title into the first word and the rest of the sentence
                  const [firstWord, ...restOfTitle] = item.title.split(" ");
                  return (
                    <Grid size={{ xs: 4 }} key={index}>
                      <Card
                        sx={{
                          backgroundColor: "#ffffff0d",
                          color: "#fff",
                          padding: "5px",
                          borderRadius: "8px",
                          border: "1px solid #ffffff26",
                          "&:hover": {
                            borderColor: "#0085ff",
                          },
                        }}
                      >
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{ color: "#ffffff", fontWeight: "bold" }}
                          >
                            {item.count}+
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#8f99b3",
                              fontWeight: "bold",
                              fontSize: "12px",
                            }}
                          >
                            {firstWord}
                            <br />
                            {restOfTitle.join(" ")}
                            {/* Join the rest of the title back into a string */}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "#1E90FF",
                border: "1px solid #1E90FF",
                marginTop: "28px",
                borderRadius: "4px",
                padding: "10px 24px",
                textTransform: "none",
                "&:hover": {
                  border: "1px solid #fff",
                  backgroundColor: "#040c16",
                },
              }}
            >
              GET IN TOUCH
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
