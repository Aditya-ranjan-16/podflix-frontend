import React from "react";

import img from "../../assets/music.jpg";

function PrevPodcast() {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4">
      <div className="w-[240px] h-[180px] md:w-[280px] md:h-[200px] rounded-xl ">
        <img
          className="w-[240px] h-[180px] md:w-[280px] rounded-xl"
          src={img}
        />
      </div>
      <div className="w-[70%] text-gray-400 flex flex-col justify-between py-4">
        <p className="text-justify text-sm sm:text-base pb-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          harum voluptatum nisi odit perferendis velit repellendus non, cumque
          corrupti recusandae! In ducimus, rem, amet id modi consequatur neque
          aperiam.
        </p>
        <h1>21st April 2023</h1>
      </div>
    </div>
  );
}

export default PrevPodcast;
