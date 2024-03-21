"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedCounter: React.FC<{ endValue: number }> = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 3000; // in milliseconds
    const framesPerSecond = 60;
    const totalFrames = animationDuration / (1000 / framesPerSecond);
    const increment = endValue / totalFrames;

    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= endValue) {
        clearInterval(interval);
        currentCount = endValue;
      }
      setCount(Math.ceil(currentCount));
    }, 1000 / framesPerSecond);

    return () => clearInterval(interval);
  }, [endValue]);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="text-white text-5xl font-bold"
    >
      <p>{count}+</p>
    </div>
  );
};

export default AnimatedCounter;
