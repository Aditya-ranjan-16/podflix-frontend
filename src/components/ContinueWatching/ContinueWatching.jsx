import React from "react";
import CWCard from "./CWCard";
import { Link } from "react-router-dom";

import img from "../../assets/lm.jpg";

const data = [
  {
    img: img,
  },
  {
    img: img,
  },
  {
    img: img,
  },
  {
    img: img,
  },
  {
    img: img,
  },
  {
    img: img,
  },
];

function ContinueWatching() {
  return (
    <div className="w-full  font-poppins px-4 pb-12">
      <h1 className="text-white  text-2xl sm:text-3xl md:text-4xl mb-2">
        Continue Watching
      </h1>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide h-[180px] sm:h-[260px]">
        {data.map((item) => (
          <div className="w-[280px] sm:w-[320px]">
            <Link to="/podcast">
              {" "}
              <CWCard image={item.img} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContinueWatching;
