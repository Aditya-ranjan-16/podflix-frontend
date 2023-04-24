import React from "react";
import Sidebar from "../../components/Navbar/Sidebar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import SubscribedMain from "../../components/Subscribed/SubscribedMain";

function Subscribed() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <SubscribedMain />
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
}

export default Subscribed;
