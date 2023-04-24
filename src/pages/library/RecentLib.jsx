import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Navbar/Sidebar";
import RecentMain from "../../components/Recent/RecentMain";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

function RecentLib() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <RecentMain />
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
}

export default RecentLib;
