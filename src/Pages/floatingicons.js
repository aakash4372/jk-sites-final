import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingIcons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setShowScrollTop(scrolledPercentage > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-icons">

      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <a
        href="https://wa.me/917397180444"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default FloatingIcons;
