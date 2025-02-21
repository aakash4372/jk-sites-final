import React, { useEffect } from 'react';
import './App.css';
import './Pages/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarsection from './Pages/Navbar';
import CourseCards from './Pages/Card';
import Homesection from './Pages/Home';
import CardComponent from './Pages/carddetail';
import ReviewSlider from './Pages/Review';
import Footer from './Pages/footer';
import FloatingIcons from './Pages/floatingicons';
import IndividualIntervalsExample from './Pages/carousal';
import WhatWeDo from './Pages/whatwedo';
import WhoWeServe from './Pages/whoweare';
import Profile from './Pages/teams';

export default function App() {
  // Scroll to top when the component mounts (on refresh)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbarsection />
      <IndividualIntervalsExample />
      <Homesection />
      <WhatWeDo />
      <CourseCards />
      <WhoWeServe/>
      <CardComponent />
      <Profile/>
      <ReviewSlider />
      <Footer />
      <FloatingIcons />
    </div>
  );
}
