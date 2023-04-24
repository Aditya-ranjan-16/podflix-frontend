import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Navbar/Sidebar";
import AudioContent from "../components/Audio/AudioContent";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import GenresContent from "../components/Genres/GenresContent";

function AudioMain() {
  return (
    <div className="bg-black">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <GenresContent />
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
}

export default AudioMain;
