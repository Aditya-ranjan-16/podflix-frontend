import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{ boxShadow: "inset 0 7px 9px -7px rgba(0,0,0,0.4)" }}
      className="bg-opacity-70  font-poppins  w-full sticky top-0 z-50 flex justify-between py-2 px-8 "
    >
      {/* logo */}
      <div className="flex items-center text-white">PodFlix</div>
      {/* login btn */}
      <div className="flex gap-x-4">
        <div className="hidden hflex rounded-[100px] items-cente">
          <Link to="/">
            <div className="text-black relative">
              <button className="flex items-center  space-x-2 rounded-full pr-2">
                <img
                  className="w-[32px] h-[32px] rounded-full border-2"
                  src=""
                  alt=""
                />
                <h1 className="text-ellipsis text-white text-lg font-semibold overflow-hidden">
                  Shashank
                </h1>
              </button>
            </div>
          </Link>
        </div>
        {/* <div className="flex rounded-full  font-medium  items-center ">
          <Link to="/">
            <Image className="w-8 h-8 rounded-full" src={img} />
          </Link>
        </div> */}
        <div className="flex bg-transparent text-white rounded-full font-medium  items-center ">
          <Link to="/login" className="py-1 px-3 rounded text-lg">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
