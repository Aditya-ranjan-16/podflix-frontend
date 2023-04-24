import React from "react";
import Sidebar from "../components/Navbar/Sidebar";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import SearchContent from "../components/Search/SearchContent";

function Search() {
  return (
    <div className="bg-black">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <SearchContent />
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
}

export default Search;
