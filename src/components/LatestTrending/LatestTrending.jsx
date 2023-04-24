import React from "react";
import LTCard from "./LTCard";
import img from "../../assets/music.jpg";
import { Link } from "react-router-dom";

function LatestTrending({ type, data }) {
  return (
    <div className="w-full font-poppins px-4 pt-4 pb-12">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl mb-2 ">
        Latest & Trending {type}
      </h1>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide h-[190px] sm:h-[260px]">
        {data.map((item) => (
          <div className="w-[150px] sm:w-[200px] ">
            <Link to={`/podcast/${item._id}`}>
              {" "}
              <LTCard item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestTrending;
