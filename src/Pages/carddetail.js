import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Col, Row, Container } from "react-bootstrap";
import "./Style.css";

const courses = [
  {
    title: "Hindi Coaching",
    description: "Jolly Phonics for Kindergarten<br />CBSE Hindi Coaching (Grades 3-9)<br />Eight-Level Hindi Program<br/>CEO-Based Customized Spoken Hindi Course<br/>Hindi Diploma Course",
    image: `${process.env.PUBLIC_URL}/hindi.jpg`
  },
  {
    title: "Arts & Culture",
    description: "Carnatic Singing and Bharatanatyam (Ages 5 to 14)",
    image: `${process.env.PUBLIC_URL}/arts.jpg`
  },
  {
    title: "Sports",
    description: "Table Tennis, Swimming, and Football (Ages 7 to 18)",
    image: `${process.env.PUBLIC_URL}/sport.jpg`
  },
  {
    title: "Creative & Skill-Based Courses",
    description: "Storytelling (Ages 7 to 10)<br />Mehandi (Ages 8 to 15)",
    image: `${process.env.PUBLIC_URL}/creatives.jpg`
  },
  {
    title: "Spoken English Programs",
    description: "CEO-Based Customized Course<br />Special programs for Government School Students, College Students, and Homemakers",
    image: `${process.env.PUBLIC_URL}/english.jpg`
  },
  {
    title: "Workshops",
    description: "Covering Healthcare, Diet, and various other topics",
    image: `${process.env.PUBLIC_URL}/workshop.jpg`
  }
];

const CardComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <Container className="pt-5 mb-5 card-component" id="courses">
      <h2 className="text-center  mb-5"  data-aos="zoom-in">
        Courses
      </h2>

      <Row className="justify-content-center pt-2">
        {courses.map((course, index) => (
          <Col
            key={index}
            xs={12}
            md={6}
            lg={4}
            className="d-flex mb-4 px-3"
            data-aos="zoom-in-up"
          >
            <Card
              className="shadow-sm card-hover course-card flex-fill text-white"
              style={{
                backgroundImage: `url(${course.image})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                minHeight: "250px",
                width: "100%"
              }}
            >
              <Card.Body className="text-center d-flex flex-column bg-overlay">
                <Card.Title>{course.title}</Card.Title>
                <div className="card-description flex-grow-1">
                  <p dangerouslySetInnerHTML={{ __html: course.description }}></p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardComponent;
