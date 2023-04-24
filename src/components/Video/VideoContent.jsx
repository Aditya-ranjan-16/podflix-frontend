import React from "react";
import LatestTrending from "../LatestTrending/LatestTrending";
import img from "../../assets/music.jpg";
import CLCard from "../ContinueListening/CLCard";
import CWCard from "../ContinueWatching/CWCard";
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

function VideoContent() {
  console.log("hhh");
  return (
    <div className="bg-[#1e1e1e] w-[100%] text-white pl-[5%] pb-20 font-poppins">
      <div className="flex space-x-8 px-24 pt-16 pb-8">
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl">Video</h1>{" "}
        <br />
      </div>
      <div className="pl-20">
        <LatestTrending />
      </div>
      <div className="flex space-x-8 px-24 pt-8 pb-8">
        <h1 className="text-white  text-2xl md:text-3xl lg:text-5xl">All </h1>
      </div>
      <div className="flex pl-24 space-x-4 overflow-x-scroll scrollbar-hide h-[300px] sm:h-[340px]"></div>
    </div>
  );
}

export default VideoContent;
