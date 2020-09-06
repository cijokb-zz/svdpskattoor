import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BannerCarousel = (props) => (
  <Carousel>
    {props.images.map((image,index) => {
      const {
        childImageSharp: {
          fluid: { src },
          relativePath: name,
        },
      } = image;
      return (
        <Carousel.Item key={`Slide${index}`}>
          <img
            className="d-block w-100"
            src={src}
            alt={name}
          />
        </Carousel.Item>
      );
    })}
  </Carousel>
);

export default BannerCarousel;
