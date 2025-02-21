import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import birdAnimation from "./bird.json";

const FloatingIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    // Set a delay of 3 seconds before showing the icons
    const timer = setTimeout(() => {
      setShowIcons(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <>
      {showIcons && (
        <div className="floating-icons">
          {/* Shaking Image */}
          <img
            src={`${process.env.PUBLIC_URL}/message.png`} // Replace with your actual image path
            alt="Shaking Icon"
            className="shaking-image"
          />

          {/* Lottie Animation */}
          <a
            href="https://wa.me/917397180444"
            target="_blank"
            rel="noopener noreferrer"
            className="bird-animation"
          >
            <Lottie animationData={birdAnimation} loop={true} />
          </a>
        </div>
      )}
    </>
  );
};

export default FloatingIcons;
