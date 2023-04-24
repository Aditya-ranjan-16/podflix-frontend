import React, { useContext } from "react";
import { Link } from "react-router-dom";

import user from "../../assets/user.svg";
import ypod from "../../assets/plus-circle.svg";
import logout from "../../assets/power.svg";
import img from "../../assets/music.jpg";
import edit from "../../assets/edit.svg";
import AuthContext from "../../store/auth-context";

function DashboardSidebar() {
  const authCtx = useContext(AuthContext);
  const logout = async () => {
    authCtx.logout();
  };
  return (
    <div className="bg-[#0f0f0f] min-h-screen w-[80px] lg:w-[200px] fixed flex flex-col justify-center">
      <div className="pl-8 text-white">
        <Link className="text-3xl font-bold" to="/">
          PodFlix
        </Link>
      </div>
      <div className="sticky flex flex-col pt-24 items-center lg:border-r-2 border-gray-400 h-[80vh] w-full font-poppins text-white text-lg">
        <div className=" relative flex flex-col w-[85%] lg:w-[80%] justify-center items-center mb-8">
          <div className="absolute flex justify-center items-center top-1 bg-black rounded-full left-2/3 w-[25px] h-[25px]">
            <img className="w-[16px] h-[16px]" src={edit} />
          </div>
          <img
            className="w-[60px] h-[60px] lg:w-[150px] lg:h-[150px] rounded-full"
            src={img}
          />
          <h1 className="hidden lg:block pt-2">Username</h1>
        </div>
        <div className="flex w-[80%]">
          <Link
            className="flex justify-center lg:justify-start space-x-2 w-full"
            to="/dashboard"
          >
            <img className="w-8 lg:w-4" src={user} />
            <h1 className="hidden lg:block ">Profile</h1>
          </Link>
        </div>
        <hr className="hidden lg:block border-[2px] w-[80%] border-[#EB740B]" />
        <div className="flex w-[80%] mt-4">
          <Link
            className="flex justify-center lg:justify-start space-x-2 w-full"
            to="/dashboard/yourpodcast"
          >
            <img className="w-8 lg:w-4" src={ypod} />
            <h1 className="hidden lg:block ">Your Podcast</h1>
          </Link>
        </div>
        <hr className="hidden  lg:block border-[2px] w-[80%] border-[#EB740B]" />
        <div onClick={logout} className="flex cursor-pointer w-[80%] mt-4">
          <img className="w-8 lg:w-4" src={logout} />
          <h1 className="hidden lg:block ">Log out</h1>
        </div>
        <hr className="hidden lg:block border-[2px] w-[80%] border-[#EB740B]" />
      </div>
    </div>
  );
}

export default DashboardSidebar;
