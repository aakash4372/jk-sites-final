import React from 'react'
import './App.css'
import './Pages/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarsection from './Pages/Navbar'
import CourseCards from './Pages/Card'
import Homesection from './Pages/Home'
import CardComponent from './Pages/carddetail'
import ReviewSlider from './Pages/Review'
import Footer from './Pages/footer'
import FloatingIcons from './Pages/floatingicons'


export default function App() {
  return (
    <div>
      <Navbarsection/>
      <Homesection/>
      <CourseCards/>
      <CardComponent/>
      <ReviewSlider/>
      <Footer/>
      <FloatingIcons/>
    </div>
  )
}
