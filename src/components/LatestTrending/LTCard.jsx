import React from "react";
import { Link } from "react-router-dom";
import fav from "../../assets/Vector.svg";
import sub from "../../assets/Subscribe.svg";
import shr from "../../assets/share-2.png";

function LTCard({ item }) {
  return (
    <div className="w-[150px] sm:w-[200px] h-[180px] sm:h-[240px]">
      <div className="relative">
        <img
          className="rounded-xl h-[180px] sm:h-[240px]"
          width={200}
          height={240}
          src={`http://localhost:5000${item.thumbnail[0]}`}
          alt=""
        />
      </div>
    </div>
  );
}

export default LTCard;
