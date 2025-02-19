import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css"; 

const reviews = [
  {
    name: "Mr. Senthil CEO Apex - CEO",
    content: "New learning experience for me after a long time. It's very comfortable through online.",
  },
  {
    name: "Dr. Devi Breethi B.D.S",
    content: "I sincerely appreciate the time and effort you put into conducting such an insightful and engaging workshop. Your expertise and clear explanations made the session truly valuable, and kids learned a lot from it.",
  },
  {
    name: "Kavita mam",
    content: "I'm extremely happy for the guidance you give to my daughter!! Tamil wasn't as easy as this before!! All thanks to you!! The efforts you take sorting out time too I really appreciate!!",
  },
];

const renderStars = () => {
  return Array.from({ length: 5 }, (_, index) => (
    <span key={index} className="text-warning">★</span>
  ));
};

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="review-section py-5 mb-5" id="Reviews">
      <h2 className="text-center mb-4">Student & Parent Reviews</h2>
      <Slider {...settings} className="review-slider">
        {reviews.map((review, index) => (
          <div key={index} className="p-3">
            <Card className="review-card text-center pt-5 position-relative">
              <FaQuoteLeft className="quote-icon top-left" />
              <p className="review-content">{review.content}</p>
              <FaQuoteRight className="quote-icon bottom-right" />
              <div className="review-stars">{renderStars()}</div>
              <h5 className="review-name mt-2">{review.name}</h5>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
