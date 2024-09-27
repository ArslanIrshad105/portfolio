import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

// Sample images (replace these with your actual image URLs)
const projectData = [
  {
    title: "Website Design",
    subtitle: "Web Design, App Design",
    imgUrl: "https://janna-react.vercel.app/images/popup-project-1.jpg",
  },
  {
    title: "Dashboard Design",
    subtitle: "Web Design, App Design",
    imgUrl: "https://janna-react.vercel.app/images/popup-project-2.jpg",
  },
  {
    title: "Portfolio Design",
    subtitle: "Web Design, App Design",
    imgUrl: "https://janna-react.vercel.app/images/popup-project-3.jpg",
  },
  {
    title: "App Design",
    subtitle: "Web Design, App Design",
    imgUrl: "https://janna-react.vercel.app/images/popup-project-4.jpg",
  },
  // Add more projects as needed
];

// Carousel settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ImageModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (imgUrl) => {
    setSelectedImage(imgUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ padding: "40px 0", color: "#fff" }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
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
              MY WORK
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: "#ffffff",
                fontSize: "40px",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              PROJECTS
            </Typography>
          </Grid>

          {/* Carousel */}
          <Grid item xs={12}>
            <Slider {...settings}>
              {projectData.map((project, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    "&:hover .image": {
                      filter: "blur(5px)",
                    },
                    "&:hover .overlay": {
                      opacity: 1,
                    },
                  }}
                >
                  <Card
                    sx={{
                      margin: "0 20px",
                      borderRadius: "10px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* CardMedia for image, only this will blur on hover */}
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        height="300"
                        width="350"
                        className="image"
                        sx={{
                          padding: "20px",
                          borderRadius: "10px",
                          transition: "filter 0.3s ease",
                        }}
                        image={project.imgUrl}
                        alt={project.title}
                      />

                      {/* Plus sign overlay */}
                      <Box
                        className="overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          opacity: 0,
                          transition: "opacity 0.3s",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                            padding: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => handleClickOpen(project.imgUrl)}
                        >
                          <AddIcon sx={{ fontSize: "48px", color: "#000" }} />
                        </Box>
                      </Box>
                    </Box>

                    <CardContent>
                      <Typography
                        variant="h6"
                        component="div"
                        fontWeight="bold"
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Grid>
        </Grid>

        {/* Modal showing only image */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogContent sx={{ position: "relative" }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: "10px", right: "10px" }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImage && (
              <CardMedia
                component="img"
                sx={{ width: "100%", borderRadius: "10px" }}
                image={selectedImage}
                alt="Project Image"
              />
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default ImageModal;
