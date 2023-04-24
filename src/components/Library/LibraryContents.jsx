import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/lm.jpg";

function LibraryContents() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen w-[100%] text-white pl-[5%] font-poppins ">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl pl-8 xl:pl-16 pt-16 pb-8">
        Library
      </h1>
      <div className=" px-8 xl:px-16 flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-center justify-between font-poppins">
        <div className="w-[290px] xl:w-[360px] h-[360px] xl:h-[420px] rounded-xl p-6 xl:p-8 bg-[#242424]">
          <Link to="/library/recent">
            <div>
              <div className="h-[280px] xl:h-[320px] rounded-xl">
                <img className="h-[280px] xl:h-[320px] rounded-xl" src={img} />
              </div>
              <h1 className="pt-3 text-xl">Recents</h1>
            </div>
          </Link>
        </div>
        <div className="w-[290px] xl:w-[360px] h-[360px] xl:h-[420px] rounded-xl p-8 bg-[#242424]">
          <Link to="/library/favourites">
            <div>
              <div className="h-[280px] xl:h-[320px] rounded-xl">
                <img className="h-[280px] xl:h-[320px] rounded-xl" src={img} />
              </div>
              <h1 className="pt-3 text-xl">Favourites</h1>
            </div>
          </Link>
        </div>
        <div className="w-[290px] xl:w-[360px] h-[360px] xl:h-[420px] rounded-xl p-8 bg-[#242424]">
          <Link to="/library/subscribed">
            <div>
              <div className="h-[280px] xl:h-[320px] rounded-xl">
                <img className="h-[280px] xl:h-[320px] rounded-xl" src={img} />
              </div>
              <h1 className="pt-3 text-xl">Subscribed</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LibraryContents;
