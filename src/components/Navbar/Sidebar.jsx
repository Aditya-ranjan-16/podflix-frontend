import React, { useContext } from "react";
import { Link } from "react-router-dom";

import home from "../../assets/Home.svg";
import aud from "../../assets/mic.svg";
import vid from "../../assets/Mask group.svg";
import lib from "../../assets/Library.svg";
import ser from "../../assets/search.svg";
import acc from "../../assets/user.svg";
import img from "../../assets/lm.jpg";
import AuthContext from "../../store/auth-context";

function Sidebar() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="bg-transparent min-w-[30px] hover:w-[10%] transition-all  z-10 min-h-screen w-[5%] fixed flex flex-col items-start justify-center">
      <div className="sticky clSS flex flex-col  w-full font-poppins text-white text-lg h-[100vh]">
        <div className="pt-6 pl-4">
          <Link className="text-3xl font-bold" to="/">
            PodFlix
          </Link>
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className="flex w-full pb-8">
            {authCtx.isLoggedIn && (
              <div className="">
                <Link
                  to="/dashboard"
                  className="flex space-x-2 items-start ml-4 w-full"
                >
                  <img
                    className="w-[24px] h-[24px] border-[1px] rounded-full"
                    src={img}
                  />
                  <h1 className="invisible group-hover:visible">Account</h1>
                </Link>
              </div>
            )}

            {!authCtx.isLoggedIn && (
              <div className="">
                <Link
                  to="/login"
                  className="flex space-x-2 items-start ml-4 w-full"
                >
                  <img className="w-[20px]" src={acc} />
                  <h1 className="invisible group-hover:visible">Login</h1>
                </Link>
              </div>
            )}
          </div>
          <div className="flex  w-full my-2">
            <Link className="flex space-x-2 items-start ml-4 w-full" to="/">
              <img className="w-[20px]" src={home} />
              <h1 className="hidden md:block invisible group-hover:visible">
                Home
              </h1>
            </Link>
          </div>
          <div className="flex w-full  my-2">
            <Link
              className="flex space-x-2  items-start ml-4  w-full"
              to="/audio"
            >
              <img className="w-[20px]" src={aud} />
              <h1 className="hidden md:block invisible  group-hover:visible">
                Audio
              </h1>
            </Link>
          </div>
          <div className="flex w-full  my-2">
            <Link
              className="flex  space-x-2 items-start ml-4 w-full"
              to="/video"
            >
              <img className="w-[20px]" src={vid} />
              <h1 className="hidden md:block invisible  group-hover:visible">
                Video
              </h1>
            </Link>
          </div>
          <div className="flex w-full   my-2">
            <Link
              className="flex  space-x-2 items-start ml-4  w-full"
              to="/library"
            >
              <img className="w-[20px]" src={lib} />
              <h1 className="hidden md:block invisible  group-hover:visible">
                Library
              </h1>
            </Link>
          </div>
          <div className="flex w-full   my-2">
            <Link
              className="flex  space-x-2 items-start ml-4  w-full"
              to="/search"
            >
              <img className="w-[20px]" src={ser} />
              <h1 className="hidden md:block invisible  group-hover:visible">
                Search
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
