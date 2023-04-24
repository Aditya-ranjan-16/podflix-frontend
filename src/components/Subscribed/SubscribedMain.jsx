import React from "react";
import img from "../../assets/music.jpg";
import { Link } from "react-router-dom";

import CLCard from "../ContinueListening/CLCard";
import CWCard from "../ContinueWatching/CWCard";

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

function SubscribedMain() {
  return (
    <div className="bg-[#0f0f0f] w-[100%] text-white pl-[5%]  pb-20">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl pl-16 pt-16 pb-4">
        Subscribed
      </h1>
      <div className="">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl pl-16  pb-6">
          Audio
        </h1>
        <div className="w-full pl-16 font-poppins px-4">
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hide h-[190px] sm:h-[260px]">
            {data.map((item) => (
              <div>
                <Link to="/podcast">
                  <CLCard image={item.img} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl pl-16 pt-6 pb-6">
          Video
        </h1>
        <div className="w-full pl-16 font-poppins px-4 pb-8">
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hide h-[190px] sm:h-[260px]">
            {data.map((item) => (
              <div>
                <Link to="/podcast">
                  <CWCard image={item.img} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribedMain;
