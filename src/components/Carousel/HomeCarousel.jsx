import React from "react";
import CorouselComponent from "./CorouselComponent";
import i1 from "../../assets/ci1.png";
import i2 from "../../assets/ci2.png";
import i3 from "../../assets/ci3.png";
import i4 from "../../assets/ci4.png";

function HomeCarousel() {
  const images = [i1, i2, i3, i4];
  return (
    <div className="h-[100vh]">
      <div>
        <CorouselComponent images={images} />
      </div>
    </div>
  );
}

export default HomeCarousel;
