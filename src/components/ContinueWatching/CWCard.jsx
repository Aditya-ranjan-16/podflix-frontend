import React from "react";

import fav from "../../assets/Vector.svg";
import sub from "../../assets/Subscribe.svg";
import shr from "../../assets/share-2.png";

function CWCard(props) {
  return (
    <div className="relative w-[280px] sm:w-[320px] h-[180px] sm:h-[240px]">
      <div className="absolute flex justify-between w-full bottom-0 px-2 pb-2">
        <div className="flex space-x-2">
          <img src={fav} width={20} />
          {/* <img src={sub} width={20} /> */}
        </div>
        <div>
          <img src={shr} width={20} />
        </div>
      </div>
      <div>
        <img
          className="w-[280px] sm:w-[320px] h-[180px] sm:h-[240px]"
          src={props.image}
          alt=""
        />
        <div className="bg-gray-400 rounded-full h-1 w-[100%]">
          <div className="bg-[#eb740b] rounded-full h-1 w-[50%]"></div>
        </div>
      </div>
    </div>
  );
}

export default CWCard;
