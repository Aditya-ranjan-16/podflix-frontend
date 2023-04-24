import React from "react";
import CLCard from "./CLCard";
import img from "../../assets/music.jpg";
import { Link } from "react-router-dom";

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

function ContinueListening() {
  return (
    <div className="w-full  font-poppins px-4 pb-12">
      <h1 className="text-white  text-2xl sm:text-3xl md:text-4xl mb-2 ">
        Continue Listening
      </h1>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide  h-[190px] sm:h-[260px]">
        {data.map((item) => (
          <div className="w-[150px] sm:w-[200px]">
            <Link to="/podcast">
              {" "}
              <CLCard image={item.img} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContinueListening;
