import React from "react";

import img from "../../assets/lm.jpg";
import play from "../../assets/group 8.png";
import { Link } from "react-router-dom";

function PodAllEp({ data }) {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-start items-center md:space-x-6">
      <div className="w-[250px] h-[210px] md:w-[300px] md:h-[250px]">
        <img
          className="w-[250px] h-[210px] md:w-[300px] md:h-[250px]"
          src={img}
        />
      </div>
      <div className="pt-4 w-[70%] flex flex-col items-center md:items-start">
        <h1 className="text-2xl text-[#EB740B] font-semibold text-justify">
          {data.title}
        </h1>
        <p>{data.des}</p> <br />
      </div>
    </div>
  );
}

export default PodAllEp;
