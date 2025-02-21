import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel fade interval={3000} controls={true} indicators={false}>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={`${process.env.PUBLIC_URL}/carousel/school.jpg`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-center jk">Welcome to JK Coaching Academy</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img"
            src={`${process.env.PUBLIC_URL}/carousel/school2.jpg`}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="text-center jk">Welcome to JK Coaching Academy</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img"
            src={`${process.env.PUBLIC_URL}/carousel/school3.jpg`}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="text-center jk">Welcome to JK Coaching Academy</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
