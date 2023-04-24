import React, { useContext, useEffect, useRef, useState } from "react";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";

import thumb from "../../assets/thumb.svg";
import { Link } from "react-router-dom";

import axios from "axios";

import AuthContext from "../../store/auth-context";

function EpForm() {
  const [currentseason, setCurrentseason] = useState(1);
  const [seasons, setSeasons] = useState([]);

  const authCtx = useContext(AuthContext);

  const [formdata, setFormdata] = useState({
    title: "",
    des: "",
    podcastIDBody: "6446472968378f22612e5159",
    thumbnail: "",
    season: 1,
    videos: "",
  });

  const onChange = (e) => {
    var val = e.target.value;
    if (e.target.name == "videos") {
      val = e.target.files[0];
    }
    setFormdata({ ...formdata, [e.target.name]: val });
  };

  const oncreate = async () => {
    const formData = new FormData();
    Object.keys(formdata).forEach((key) => {
      formData.append(key, formdata[key]);
    });
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    const res = await axios.post("/api/episode/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${authCtx.token}`,
      },
    });
  };

  const changeSeason = (e) => {
    setCurrentseason(e.target.value);
  };
  const init = () => {
    var n = [];
    for (let i = 0; i < 4; i++) {
      n.push(i + 1);
    }
    setSeasons(n);
  };
  useEffect(() => {
    init();
  }, []);

  // file upload on + btn
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <div className="font-poppins flex">
        <DashboardSidebar />
        <div className="w-[100%] pl-[80px] lg:pl-[200px] bg-[#0f0f0f] pt-20 pb-8 min-h-screen">
          <h1 className="text-white pl-12 text-xl sm:text-2xl md:text-3xl font-semibold">
            Add Episode
          </h1>
          <div className="px-6 lg:px-16 flex flex-col items-center xl:items-start lg:flex-row justify-between w-full">
            <div className="text-white w-full lg:w-[47%] flex flex-col items-center pt-8">
              <div className="border-2 border-dotted rounded-xl w-[90%] sm:w-[80%] h-[340px] sm:h-[400px] p-4">
                <div className="bg-gray-300 h-[308px] sm:h-[368px] flex flex-col justify-center items-center rounded-xl">
                  <button onClick={handleClick}>
                    <img src={thumb} className="w-8" />
                    <input
                      ref={inputRef}
                      // onChange={handleFileChange}
                      className="hidden"
                      type="file"
                      name="videos"
                      onChange={onChange}
                    />
                  </button>

                  <h1 className="text-[#3E3E3E] text-lg sm:text-xl">
                    Add Video
                  </h1>
                </div>
              </div>
            </div>
            <div className="text-white flex flex-col items-center lg:w-[47%] w-full">
              <div className="w-[80%] pb-6">
                <h1 className="text-lg sm:text-xl md:text-3xl text-[#EB740B] font-semibold pb-2">
                  Add Title
                </h1>
                <input
                  className="bg-[#0f0f0f] border-[1px] rounded-lg w-full text-lg sm:text-xl p-1"
                  type="text"
                  name="title"
                  onChange={onChange}
                  value={formdata.title}
                />
              </div>
              <div className="w-[80%] pb-6">
                <h1 className="text-lg sm:text-xl md:text-3xl text-[#EB740B] font-semibold pb-2">
                  Add Description
                </h1>
                <textarea
                  rows="3"
                  name="des"
                  onChange={onChange}
                  value={formdata.des}
                  className="bg-[#0f0f0f]  border-[1px] rounded-lg w-full text-lg sm:text-xl p-1"
                />
              </div>
              <div className="w-[80%] pb-6">
                <h1 className="text-lg sm:text-xl md:text-3xl text-[#EB740B] font-semibold pb-2">
                  Select Episode
                </h1>
                <select
                  className="bg-[#0f0f0f] border-[1px] rounded-lg w-full text-lg sm:text-xl p-1"
                  value={currentseason}
                  onChange={changeSeason}
                >
                  {seasons.map((v) => (
                    <option name="type" value={v}>
                      season {v}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-[80%] pt-8">
                <Link to="/dashboard/vidthumbnailform">
                  <button
                    onClick={oncreate}
                    className="border-2 bg-[#161616] border-[#EB740B] font-semibold rounded-full text-[#EB740B] text-lg sm:text-xl md:text-2xl px-4 py-1"
                  >
                    Upload
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpForm;
