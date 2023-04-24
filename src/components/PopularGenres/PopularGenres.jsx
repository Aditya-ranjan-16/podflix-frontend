import React from "react";
import PGCard from "./PGCard";
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
  {
    img: img,
  },
  {
    img: img,
  },
];

function PopularGenres() {
  return (
    <div className="w-full  font-poppins px-4 pb-12">
      <h1 className="text-white  text-2xl sm:text-3xl md:text-4xl mb-2">
        Popular Genres
      </h1>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide h-[160px] sm:h-[220px]">
        {data.map((item) => (
          <div className="w-[260px] sm:w-[300px]">
            <Link href="/populargenres">
              {" "}
              <PGCard image={item.img} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularGenres;
