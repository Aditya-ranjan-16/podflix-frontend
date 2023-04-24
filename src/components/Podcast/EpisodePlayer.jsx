import React, { useState } from "react";

import img from "../../assets/music.jpg";
import B15 from "../../assets/Back15sec.png";
import F15 from "../../assets/Skip15sec.png";
import Back from "../../assets/skip-back.png";
import Fwd from "../../assets/skip-forward.png";
import Play from "../../assets/pause.png";
import Pause from "../../assets/Play-pause.png";
import Vol from "../../assets/volume.png";
import max from "../../assets/Vector.png";
import min from "../../assets/minimize-2.png";

function EpisodePlayer() {
  const [visiblePlay, setvisiblePlay] = useState("hidden");
  const [visiblePause, setvisiblePause] = useState("");

  const handlePlay = () => {
    setvisiblePlay("hidden");
    setvisiblePause("");
  };
  const handlePause = () => {
    setvisiblePlay("");
    setvisiblePause("hidden");
  };

  return (
    <div className="bg-[#0f0f0f] w-[100%] text-white pl-[5%] ">
      <div className="px-6 py-4 flex justify-between">
        <div className="w-[20%]">
          {/* <img className="w-[100px] h-[100px] rounded-md" src={img} /> */}
        </div>

        <div className=" w-full  flex flex-col justify-center space-x-2 items-center">
          <div className="flex space-x-2 justify-center items-center mb-2">
            <div>
              <select
                name="speed"
                id=""
                className="appearance-none bg-[#1c1c1c]"
              >
                <option value="">1x</option>
                <option value="">1.5x</option>
                <option value="">2x</option>
              </select>
            </div>
            <button className="">
              <img className=" w-[20px] rounded-md" src={B15} />
            </button>
            <button className="">
              <img className=" w-[22px] rounded-md" src={Back} />
            </button>
            <div>
              <button className="" onClick={handlePlay}>
                <img
                  className={`w-[30px] rounded-md ${visiblePlay}`}
                  src={Play}
                />
              </button>
              <button className="" onClick={handlePause}>
                <img
                  className={`w-[30px] rounded-md ${visiblePause}`}
                  src={Pause}
                />
              </button>
            </div>

            <button className="">
              <img className=" w-[22px] rounded-md" src={Fwd} />
            </button>
            <button className="">
              <img className=" w-[20px] rounded-md" src={F15} />
            </button>
          </div>
          {/* slider */}
          <div className="w-full flex justify-center space-x-2 items-center">
            <h1 className="text-sm">10:23</h1>
            <div className="bg-gray-400 rounded-full h-1 w-[60%]">
              <div className="bg-[#eb740b] rounded-full h-1 w-[50%]"></div>
            </div>
            <h1 className="text-sm">10:23:34</h1>
          </div>
          {/* music name */}
          <div>
            <h1 className="text-[#C6C6C6]">Music name</h1>
          </div>
        </div>
        <div className="w-[20%] flex space-x-2 justify-center items-center">
          <button>
            <img className="w-[20px] rounded-md" src={min} />
          </button>
          <button>
            <img className="w-[20px] rounded-md" src={max} />
          </button>
          <img className="w-[15%] rounded-md" src={Vol} />
          <div className="bg-gray-400 rounded-full h-1 w-[50%]">
            <div className="bg-[#eb740b] rounded-full h-1 w-[50%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpisodePlayer;
