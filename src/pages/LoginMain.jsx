import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/login.png";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import AuthContext from "../store/auth-context";
function LoginMain() {
  const redirect = useNavigate();
  const authCtx = useContext(AuthContext);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const onlogin = async () => {
    const res = await axios.post("/api/user/login", formdata);
    const data = res.data;
    if (res.data.success == true) {
      const info = data.user;
      console.log(info);
      await authCtx.login(
        info.name,
        info.email,
        info.avatar,
        info.bio,
        info.podcast,
        info.createdPodcast,
        res.data.token,
        10800000
      );
      redirect("/");
    }
  };

  return (
    <div className="text-white min-h-screen bg-[#0f0f0f] flex justify-end font-poppins">
      <div className="left-0 min-h-screen absolute z-20 flex w-fit pt-6 pl-6">
        <Link className="text-3xl font-bold" to="/">
          PodFlix
        </Link>
      </div>
      <div className="hidden left-0 min-h-screen absolute lg:flex lg:items-end w-fit">
        <img className="left-0 h-[100vh] items-end z-20" src={img} alt="" />
      </div>
      <div className="bg-[#171717] relative w-full lg:w-[70%] lg:rounded-tl-3xl lg:rounded-bl-3xl flex justify-center py-24">
        <div className="bg-[#191919] w-[80%] md:w-[60%] shadow-lg shadow-black rounded-xl p-4 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-[#cfcfcf] text-2xl">Welcome Back</h1>
            <h2 className="text-[#cfcfcf] text-lg">Login Now</h2>
          </div>
          <br />
          <div>
            <h1>google login</h1>
          </div>
          <br />
          <div>
            <h1 className="text-[#cfcfcf] text-lg">or</h1>
          </div>
          <div className="w-64 sm:w-80">
            <input
              className="bg-[#191919] mb-1 w-64 sm:w-80 outline-none"
              type="email"
              name="email"
              onChange={onChange}
              value={formdata.email}
              placeholder="Email ID"
            />
            <hr />
            <br />
            <input
              className="bg-[#191919] mb-1 w-64 sm:w-80 outline-none"
              type="password"
              name="password"
              onChange={onChange}
              value={formdata.password}
              placeholder="Password"
            />
            <hr />
          </div>
          <br /> <br />
          <div>
            <button
              onClick={onlogin}
              className="bg-[#282828] w-44 font-semibold text-lg rounded-md py-1"
            >
              Login
            </button>
          </div>
          <br />
          <div>
            <h1 className="text-[#cfcfcf]">
              Don't have an account?{" "}
              <span className="text-white font-semibold">
                <Link to="/register">Register</Link>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMain;
