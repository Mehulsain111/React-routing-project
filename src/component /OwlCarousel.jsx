import React, { useState, useEffect } from "react";
import "./OwlCarousel.css";
import { motion } from "framer-motion";
import img1 from "../../public/homeimg.jpeg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";
function OwlCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: img1,
      caption: "Slide 1",
    },
    {
      image: img2,
      caption: "Slide 2",
    },
    {
      image: img3,
      caption: "Slide 3",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Add a delay before the next slide transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change to 3000ms for a longer display time

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={index === currentSlide ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img src={slide.image} alt={slide.caption} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OwlCarousel;
