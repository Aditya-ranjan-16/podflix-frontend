import React, { useState, useEffect, useRef } from "react";

function CorouselComponent({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    if (typeof window !== "undefined") {
      slideRef.current.classList.add("fade-anim");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const slideInterval = setInterval(() => {
        handleNext();
        setTimeout(() => {
          if (typeof window !== "undefined") {
            slideRef.current.classList.remove("fade-anim");
          }
        }, 2000);
      }, 7000);

      return () => {
        clearInterval(slideInterval);
      };
    }
  }, []);

  return (
    <div>
      <div className="">
        <div ref={slideRef} className="select-none h-[100vh] w-full">
          <img
            className=" h-[100vh] w-full "
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
          />
        </div>
      </div>
    </div>
  );
}

export default CorouselComponent;
