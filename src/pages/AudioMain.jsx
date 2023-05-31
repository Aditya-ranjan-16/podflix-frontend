import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Navbar/Sidebar";
import AudioContent from "../components/Audio/AudioContent";

import GenresContent from "../components/Genres/GenresContent";

function AudioMain() {
  return (
    <div className="bg-black">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <GenresContent />
        </div>
      </div>
    </div>
  );
}

export default AudioMain;
