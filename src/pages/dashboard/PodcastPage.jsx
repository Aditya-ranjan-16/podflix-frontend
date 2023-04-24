import React from "react";

import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import share from "../../assets/share-2.png";
import img from "../../assets/music.jpg";

import create from "../../assets/create.svg";
import PostcardPage from "../../components/dashboard/PostcardPage";

import { Link } from "react-router-dom";
const data = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];

function Podcastpage() {
  return (
    <div>
      <div className="font-poppins flex">
        <DashboardSidebar />
        <div className="w-[100%] pl-[80px] lg:pl-[200px] bg-[#0f0f0f] pt-28 pb-8">
          <div className="px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
              <div className="w-[280x] h-[250px] sm:w-[300px] sm:h-[260px] lg:w-[350] lg:h-[300]">
                <img
                  className="w-[300px] h-[260px] lg:w-[350] lg:h-[300]"
                  src={img}
                />
              </div>
              <div className="pt-4 flex flex-col items-center lg:items-start text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-2">
                  The BuG Show
                </h1>
                <div className="flex space-x-4">
                  <h1 className="text-2xl">Name</h1>
                  <button>
                    <img className="w-5" src={share} />
                  </button>
                </div>
                <br />
                <div className="flex space-x-3">
                  <button className="border-2 bg-gray-700 rounded-md px-3 py-1">
                    Add New Season
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-8 lg:px-16 pt-8 text-white font-poppins">
            <div className="flex justify-between pb-2">
              <select
                className="bg-[#0f0f0f] text-lg font-semibold"
                name="season"
                id=""
              >
                <option value="">Season 1</option>
                <option value="">Season 2</option>
                <option value="">Season 3</option>
                <option value="">Season 4</option>
              </select>
              <Link to="/dashboard/epform">
                <button className="text-[#EB740B] flex items-center space-x-2 text-lg px-3 py-1 rounded-full">
                  <img className="w-6" src={create} />
                  <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    Add Episode
                  </h1>
                </button>
              </Link>
            </div>
            <hr />
          </div>
          <div className="px-6 lg:px-16 pt-8">
            {data.map((item) => (
              <div className="p-4">
                <PostcardPage /> <hr className="mt-4 " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcastpage;
