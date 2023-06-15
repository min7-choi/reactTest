import React, { useState, useEffect } from "react";
import defaultImage from "../assets/1.gif";
import Image1 from "../assets/emotion1.png";
import Image2 from "../assets/emotion2.png";
import Image3 from "../assets/emotion3.png";
import Image4 from "../assets/emotion4.png";
import Image5 from "../assets/emotion5.png";
import Image6 from "../assets/emotion5.png";

const MyComponent = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "1") {
        setIsAnimating((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    let animationInterval;

    if (isAnimating) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

      animationInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    } else {
      clearInterval(animationInterval);
      setCurrentImageIndex(0);
    }

    return () => {
      clearInterval(animationInterval);
    };
  }, [isAnimating]);

  return (
    <div>
      <img
        src={isAnimating ? images[currentImageIndex] : defaultImage}
        alt="Image"
      />
    </div>
  );
};

export default MyComponent;
