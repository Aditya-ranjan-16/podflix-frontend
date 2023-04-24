import React from "react";

import img from "../../assets/music.jpg";
import play from "../../assets/Group_8.png";

function PostcardPage() {
  return (
    <div>
      <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
        <div className="w-[200px] h-[170px] md:w-[250px] md:h-[200px]">
          <img
            className="w-[200px] h-[170px] md:w-[250px] md:h-[200px]"
            src={img}
          />
        </div>
        <div className="w-[80%] sm:w-[70%] text-gray-400 flex flex-col items-center lg:items-start justify-between py-2">
          <h1 className="text-lg sm:text-xl text-[#EB740B] font-semibold">
            Title
          </h1>
          <p className="text-justify text-sm sm:text-base pb-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            harum voluptatum nisi odit perferendis velit repellendus non, cumque
            corrupti recusandae! In ducimus, rem, amet id modi consequatur neque
            aperiam.
          </p>
          <div className="flex items-center space-x-4">
            <img className="w-8" src={play} />
            <h1>23:45</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostcardPage;
