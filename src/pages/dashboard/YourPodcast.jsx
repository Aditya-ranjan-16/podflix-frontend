import React from "react";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import img from "../../assets/Rectangle 76.svg";
import create from "../../assets/create.svg";
import PrevPodcast from "../../components/dashboard/PrevPodcast";
import { Link } from "react-router-dom";

const data = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];

function YourPodcast() {
  return (
    <div>
      <div className="flex font-poppins">
        <DashboardSidebar />
        <div className="w-[100%] pl-[80px] lg:pl-[200px] bg-[#0f0f0f] pt-28">
          <div className="relative mx-12 lg:mx-24">
            <div className="absolute top-0 left-0 z-20 w-full h-full flex flex-col justify-center items-center">
              <h1 className=" text-white text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold">
                Add Create Share
              </h1>
              <h2 className="hidden sm:block text-gray-300  sm:text-lg md:text-xl">
                Share your experience in seconds!
              </h2>
            </div>
            <img className="z-0" src={img} />
          </div>
          <div className="px-6 sm:px-8 md:px-16 pt-8">
            <div className="flex justify-between pt-4">
              <h1 className="text-white text-lg sm:text-xl md:text-3xl">
                Previous
              </h1>
              <Link to="/dashboard/form">
                <button className="text-[#EB740B] flex items-center space-x-2 text-lg px-3 py-1 rounded-full">
                  <img className="w-4 md:w-6" src={create} />
                  <h1 className="text-lg sm:text-2xl font-semibold">
                    Create New
                  </h1>
                </button>
              </Link>
            </div>
            <hr />
          </div>
          <div className="px-4 sm:px-8 lg:px-16 pt-8">
            {data.map((item) => (
              <div className="p-4">
                <Link to="/dashboard/podcastpage">
                  <PrevPodcast /> <hr className="mt-4 " />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourPodcast;
