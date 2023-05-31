import React from "react";
import Sidebar from "../components/Navbar/Sidebar";

import SearchContent from "../components/Search/SearchContent";

function Search() {
  return (
    <div className="bg-black">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <SearchContent />
        </div>
      </div>
    </div>
  );
}

export default Search;
