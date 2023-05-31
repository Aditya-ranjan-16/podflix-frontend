import React from "react";
import Sidebar from "../components/Navbar/Sidebar";
import GenresContent from "../components/Genres/GenresContent";

function PopularGenres() {
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

export default PopularGenres;
