import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Navbar/Sidebar";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import LatestTrending from "../components/LatestTrending/LatestTrending";
import ContinueListening from "../components/ContinueListening/ContinueListening";
import ContinueWatching from "../components/ContinueWatching/ContinueWatching";
import axios from "axios";
import PopularGenres from "../components/PopularGenres/PopularGenres";
import { useEffect, useState } from "react";

export default function IndexMain() {
  const [audio, setAudio] = useState([]);
  const [video, setVideo] = useState([]);
  const makereq = async () => {
    const res = await axios.post("/api/podcast/podcastTrending", {
      type: "audio",
    });
    const audio = await res.data;
    const res2 = await axios.post("/api/podcast/podcastTrending", {
      type: "video",
    });
    const video = await res2.data;
    setAudio(audio);
    setVideo(video);
  };
  useEffect(() => {
    makereq();
  });
  return (
    <div className="bg-black">
      <div className="flex">
        <Sidebar />

        <div className="bg-[#0f0f0f] w-[100%] text-white">
          <HomeCarousel />
          <div className="w-[100%]  pl-[40px]">
            <LatestTrending type={"Audios"} data={audio} />
            <LatestTrending type={"Videos"} data={video} />
            <ContinueListening />
            <ContinueWatching />
            <PopularGenres />
          </div>
        </div>
      </div>
    </div>
  );
}
