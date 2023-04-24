import React from "react";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";

function Index() {
  return (
    <div>
      <div className="flex font-poppins">
        <DashboardSidebar />
        <div className="w-[100%] h-[100vh] pl-[80px] lg:pl-[200px] bg-[#0f0f0f] pt-32">
          <div className="px-16 lg:px-24">
            <h1 className="text-white text-2xl sm:text-4xl font-semibold">
              Account Details
            </h1>
            <div className="flex justify-between pt-4">
              <h1 className="text-gray-400">Profile</h1>
              <button className="text-[#EB740B] sm:text-lg px-2 sm:px-3 py-1 border-2 border-[#EB740B] rounded-full">
                Edit Profile
              </button>
            </div>
            <div className="pl- lg:pl-12 lg:pr-24 pt-24 text-white">
              <input
                className="bg-[#0f0f0f] pl-2 mb-2 outline-none w-full"
                type="text"
                placeholder="Username"
              />
              <hr />
              <br />

              <input
                className="bg-[#0f0f0f] pl-2 mb-2 mt-2 outline-none w-full"
                type="email"
                placeholder="Email"
              />
              <hr />
              <br />
              <input
                className="bg-[#0f0f0f] pl-2 mb-2 mt-2 outline-none w-full"
                type="text"
                placeholder="Bio"
              />
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
