import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style.css';

export default function CourseCards() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Function to open WhatsApp link
  const openWhatsApp = () => {
    window.open("https://wa.me/917397180444", "_blank");
  };

  return (
    <div style={{backgroundColor:'#00345b'}}> 
    <div className="container pt-3 pb-5 coursecard" id="offering">
    <h2 className="text-center text-white coursecard-head mb-5"data-aos="zoom-in" style={{fontWeight: '600'}}>Our Offerings</h2>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center align-items-stretch pt-4">

      {/* Hindi Coaching Card */}
      <div className="col d-flex" data-aos="zoom-in">
        <div className="card h-100 course-card hindi-bg shadow-lg">
          <div className="card-body d-flex flex-column text-center p-4">
            <h5 className="card-title font-weight-bold" style={{fontWeight: '800'}}>Hindi Coaching</h5>
            <p className="card-text">Specialized courses designed for different age groups to enhance Hindi skills.</p>
            <button 
              onClick={openWhatsApp} 
              className="btn btn-dark mt-auto"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Extracurricular & Skill-Based Programs */}
      <div className="col d-flex" data-aos="zoom-in">
        <div className="card h-100 course-card skills-bg shadow-lg">
          <div className="card-body d-flex flex-column text-center p-4">
            <h5 className="card-title font-weight-bold" style={{fontWeight: '800'}}>Extracurricular & Skill-Based Programs</h5>
            <p className="card-text">Enhance your skills in communication, leadership, and more with our expert-led programs.</p>
            <button 
              onClick={openWhatsApp} 
              className="btn btn-dark mt-auto"
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Online Learning */}
      <div className="col d-flex" data-aos="zoom-in">
        <div className="card h-100 course-card online-bg shadow-lg">
          <div className="card-body d-flex flex-column text-center p-4">
            <h5 className="card-title font-weight-bold" style={{fontWeight: '800'}}>Online Learning</h5>
            <p className="card-text">Access flexible, expert-led online courses anytime, anywhere to learn at your own pace.</p>
            <button 
              onClick={openWhatsApp} 
              className="btn btn-dark mt-auto"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
  </div>
   
  );
}
