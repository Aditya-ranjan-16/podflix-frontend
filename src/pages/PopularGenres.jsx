import React from "react";
import Sidebar from "../components/Navbar/Sidebar";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import GenresContent from "../components/Genres/GenresContent";

function PopularGenres() {
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

export default PopularGenres;
