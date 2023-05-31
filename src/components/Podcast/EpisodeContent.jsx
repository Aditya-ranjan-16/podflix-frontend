import React, { useContext } from "react";

import img from "../../assets/lm.jpg";

import play from "../../assets/Group_8.png";
import { Link } from "react-router-dom";

import PlayerContext from "../../store/player-context";

function EpisodeContent({ data }) {
  console.log("data=", data);
  const playerCtx = useContext(PlayerContext);
  const playEpisode = () => {
    let setplayer = {
      volume: 0.5,
      isPlaying: true,
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      type: "video",
      // src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      // type: data.podcast.type,
      currentTime: 0,
      Duration: 0.0,
      playbackRate: 1,
    };
    playerCtx.setplayer(setplayer);
    playerCtx.setclicked(true);
  };
  return (
    <div className="bg-[#1e1e1e] w-[100%] text-white pl-[5%] pb-32 font-poppins">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:space-x-8  px-8 lg:px-24 pt-16">
        <div className="w-[260px] sm:w-[300px] lg:w-[350px] h-[200px] sm:h-[260px] lg:h-[300px]">
          <img
            className="w-[260px] sm:w-[300px] lg:w-[350px] h-[200px] sm:h-[260px] lg:h-[300px]"
            src={img}
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start pt-2 lg:pt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-2 lg:pb-4">
            The BuG Show
          </h1>

          <h1 className=" text-lg sm:text-xl md:text-2xl">Name</h1>
          <br />
        </div>
      </div>
      <div className="flex justify-center lg:justify-start items-center space-x-2 px-24 pt-6">
        <img className="w-6 sm:w-8" onClick={playEpisode} src={play} />

        <h1 className="text-sm sm:text-base">31:42:05</h1>
        <div className="bg-gray-500 rounded-full h-1 w-[100px]">
          <div className="bg-[#eb740b] rounded-full h-1 w-[50%]"></div>
        </div>
      </div>
      <div className="px-24 pt-2 text-[#A3A3A3]">
        <h1>Apr 8</h1>
      </div>
      <br />
      <div className="px-24 pt-2">
        <h1 className=" text-white text-xl sm:text-2xl font-semibold pb-4">
          Episode Description
        </h1>
        <p className="text-[#A3A3A3] text-justify text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          odit veritatis dicta in dolorem ea pariatur deleniti tenetur magnam
          ducimus, autem quaerat ullam animi dolore nihil! Expedita assumenda a
          nobis accusamus adipisci doloremque, modi eum aliquid deserunt, ea
          ratione provident, voluptate sit nihil architecto inventore repellat
          hic? Asperiores repellendus corporis odio, ab neque numquam soluta
          possimus dolorum. Magnam deserunt possimus eos consequuntur architecto
          porro natus nihil perspiciatis iste doloribus odit, officia aperiam
          doloremque inventore corporis. Recusandae quas provident consequuntur
          obcaecati, mollitia blanditiis minus voluptate dolorum ea neque
          voluptatem odio asperiores hic. Nobis culpa iste labore aspernatur?
          Rerum ipsam qui eligendi?
        </p>
      </div>
    </div>
  );
}

export default EpisodeContent;
