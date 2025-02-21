import React, { useEffect } from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css"; 

const services = [
  {
    title: "School Students (Primary to Higher Secondary)",
    content: "Helping them build a strong academic foundation and excel in exams.",
  },
  {
    title: "College Aspirants",
    content: "Guiding students preparing for competitive and entrance exams.",
  },
  {
    title: "Slow & Fast Learners",
    content: "Providing personalized attention to help every student learn at their own pace.",
  },
  {
    title: "Working Parents & Busy Schedules",
    content: "Offering flexible class timings to accommodate different needs.",
  },
  {
    title: "Economically Weaker Sections",
    content: "Delivering affordable education without compromising on quality.",
  },
];

const WhoWeServe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // Initialize AOS
  }, []);

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
    <div className="who-we-serve-section py-5 mb-3" id="WhoWeServe">
      <h2 className="text-center mb-4" style={{ fontWeight: "700" }}  data-aos="zoom-in">Who We Serve</h2>
      <h5 className="text-center who-we-serve-section-h5 container text-muted mb-4"  data-aos="zoom-in">
        At JK Coaching Academy, we cater to a diverse group of learners, ensuring that quality education is accessible to all. We serve:
      </h5>
      <Slider {...settings} className="who-we-serve-slider container">
        {services.map((service, index) => (
          <div key={index} className="p-3" data-aos="zoom-in">
            <Card className="service-card text-center pt-4">
              <h5 className="service-title">{service.title}</h5>
              <p className="service-content">{service.content}</p>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhoWeServe;
