import React from "react";

import Carousel from "react-material-ui-carousel";
import { Paper, Box, Typography, Button } from "@mui/material";
import "../CarouselComponent.css";

const CarouselComponent = ({ movies }) => {
  const img = movies?.[0]?.backdrop_path;
  console.log(img);
  return (
    <Box sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
      <Carousel
        autoPlay
        interval={3000}
        animation="slide"
        indicators={true}
        navButtonsAlwaysVisible={false}
        duration={600}
        swipe
      >
        {movies.map((movies, i) => (
          <SlideItem key={i} item={movies} />
        ))}
      </Carousel>
    </Box>
  );
};

function SlideItem({ item }) {
  return (
    <div>
      {item?.backdrop_path ? (
        <img
          className="carousel-image"
          src={"https://image.tmdb.org/t/p/w500/" + item?.backdrop_path}
          alt={item.name}
          style={{ width: "100%", height: 300, objectFit: "cover" }}
        />
      ) : (
        <img
          className="carousel-image"
          src={"https://image.tmdb.org/t/p/w500/" + item?.poster_path}
          alt={item.name}
          style={{ width: "100%", height: 300, objectFit: "cover" }}
        />
      )}

      <div class="movie-title">
        <h3>{item?.original_title}</h3>
      </div>
    </div>
  );
}

export default CarouselComponent;
