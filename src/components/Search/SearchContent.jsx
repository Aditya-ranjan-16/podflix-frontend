import React from "react";
import img from "../../assets/music.jpg";
import CLCard from "../ContinueListening/CLCard";
import CWCard from "../ContinueWatching/CWCard";
import { Link } from "react-router-dom";

import ser from "../../assets/search.svg";
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

function SearchContent() {
  return (
    <div className="bg-[#0f0f0f] w-[100%] text-white pl-[5%] pb-20">
      <div className="text-white sm:text-xl md:text-3xl  px-8 md:px-16 pt-24 pb-4">
        <div className="border-2 flex space-x-2 px-2 md:px-4 py-1 md:py-2 w-full rounded-xl">
          <img src={ser} width={28} height={28} />
          <input
            className="w-full bg-[#0f0f0f] outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl pl-10 md:pl-16  pb-6">
          Audio
        </h1>
        <div className="w-full pl-10 md:pl-16 font-poppins px-4">
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
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl pl-10 md:pl-16 pt-6 pb-6">
          Video
        </h1>
        <div className="w-full pl-10 md:pl-16 font-poppins px-4 pb-8">
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

export default SearchContent;
