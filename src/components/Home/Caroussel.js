/* eslint-disable react/jsx-key */
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 2,
    },
    1024: {
      items: 5,
    },
  };

const Carousel = ({items}) => {
  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      items={items}
      responsive={responsive}
      autoPlay="true"
      autoPlayInterval="2000"
     
    />
  );
};
export default Carousel;