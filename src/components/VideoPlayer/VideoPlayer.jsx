import React, { useState, useRef, useEffect, useContext } from "react";

import img from "../../assets/music.jpg";
import B15 from "../../assets/Back15sec.png";
import F15 from "../../assets/Skip15sec.png";
import Back from "../../assets/skip-back.png";
import Fwd from "../../assets/skip-forward.png";
import Play from "../../assets/pause.png";
import Pause from "../../assets/Play-pause.png";
import Vol from "../../assets/volume.png";
import AuthContext from "../../store/auth-context";
function VideoPlayer() {
  const authCtx = useContext(AuthContext);
  const fileRef = authCtx.fileref; // reference to audio element
  const [isPlaying, setIsPlaying] = useState(false); // state to track playing status
  const [volume, setVolume] = useState(1);
  const [type, setType] = useState("audio");
  const [src, setSrc] = useState("");
  const [currentTime, setCurrentTime] = useState(0); // state to track current time
  const [duration, setDuration] = useState(0); // state to track audio duration
  const [displaytime, setDisplayTime] = useState({
    curr: 0.0,
    duration: 0.0,
  });
  const [playbackRate, setPlaybackRate] = useState(1);
  const togglePlay = () => {
    if (isPlaying) {
      fileRef.current.pause();
    } else {
      fileRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const val = fileRef.current.currentTime;

    if (val / 60 > 1) {
      const minutes = (val / 60).toFixed(2);
      console.log("sss");
      setDisplayTime({ ...displaytime, ["curr"]: minutes });
    } else {
      console.log("sssdjcjd");
      setDisplayTime({ ...displaytime, ["curr"]: Math.round(val) });
    }
    setCurrentTime(fileRef.current.currentTime);

    const setPlayer = {
      volume: volume,
      src: src,
      type: type,
      currentTime: currentTime,
      displayDuration: displaytime.duration,
      playbackRate: playbackRate,
    };

    localStorage.setItem("player", JSON.stringify(setPlayer));
  };

  const handleLoadedData = () => {
    const val = fileRef.current.duration;
    const minutes = (val / 60).toFixed(2);
    setDisplayTime({ ...displaytime, ["duration"]: minutes });
    setDuration(fileRef.current.duration);
  };
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    fileRef.current.volume = newVolume;
  };
  const handleSeek = (event) => {
    const { duration } = fileRef.current;
    const seekTime = duration * (event.target.value / 100);
    fileRef.current.currentTime = seekTime;
    console.log(seekTime);
    setCurrentTime(seekTime);
  };
  const handle15Seek = (event) => {
    const { duration } = fileRef.current;
    let seekTime = 0;

    if (event === "back") {
      seekTime = fileRef.current.currentTime - 15;
    } else if (event === "forward") {
      seekTime = fileRef.current.currentTime + 15;
    }

    if (seekTime < 0) {
      seekTime = 0;
    } else if (seekTime > duration) {
      seekTime = duration;
    }

    fileRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };
  const handleSpeedChange = (event) => {
    const speed = parseFloat(event.target.value);
    fileRef.current.playbackRate = speed;
    setPlaybackRate(speed);
  };

  useEffect(() => {
    if (authCtx.player != null) {
      const data = authCtx.player;
      console.log(data);
      setSrc(data.src);
      setType(data.type);
      setVolume(data.volume);
      setDisplayTime({ ...displaytime, ["duration"]: data.displayDuration });
    }
  }, [authCtx.player, fileRef.current]);
  return (
    <div
      className={`bg-[#1c1c1c] flex flex-col  items-center justify-center z-10 fixed bottom-0 ${type} h-[15%] w-[100%] text-white pl-[5%] `}
    >
      <div className="px-6 py-4 w-full flex justify-between">
        <div className="w-[20%]">
          <img className="w-[50px] h-[50px] rounded-md" src={img} />
        </div>

        <div className=" w-full  flex flex-col justify-center  items-center">
          <div className="flex space-x-2 mr-10 justify-center items-center ">
            <div>
              <select
                name="speed"
                id=""
                value={playbackRate}
                onChange={handleSpeedChange}
                className="appearance-none bg-[#1c1c1c] outline-none"
              >
                <option value="0.5">0.5x</option>
                <option value="1">1x</option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
              </select>
            </div>
            <button
              onClick={() => {
                handle15Seek("back");
              }}
              className=""
            >
              <img className=" w-[20px] rounded-md" src={B15} />
            </button>

            <div>
              {!isPlaying && (
                <button className="" onClick={togglePlay}>
                  <img className={`w-[30px] rounded-md `} src={Play} />
                </button>
              )}
              {isPlaying && (
                <button className="" onClick={togglePlay}>
                  <img className={`w-[30px] rounded-md `} src={Pause} />
                </button>
              )}
            </div>

            <button
              onClick={() => {
                handle15Seek("forward");
              }}
              className=""
            >
              <img className=" w-[20px] rounded-md" src={F15} />
            </button>
          </div>
          {/* slider */}
          <div className="w-full flex justify-center space-x-2 items-center">
            <h1 className="text-sm ">{displaytime.curr}</h1>
            <input
              type="range"
              min={0}
              className="w-[60%]"
              max={100}
              value={(currentTime / duration) * 100 || 0}
              onChange={handleSeek}
            />
            <h1 className="text-sm">{displaytime.duration}</h1>
          </div>
          {/* music name */}
          <div>
            <h1 className="text-[#C6C6C6]">Music Name</h1>
          </div>
        </div>
        <div className="w-[20%]  flex space-x-1 justify-center items-center">
          <img className="w-[15%] rounded-md" src={Vol} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>

      {type == "video" && (
        <video
          ref={fileRef}
          src={src}
          className="w-[75%] h-[70%]  bg-black"
          onTimeUpdate={handleTimeUpdate}
          onLoadedData={handleLoadedData}
        />
      )}
      {type == "audio" && (
        <audio
          ref={fileRef}
          src={src}
          className="hidden"
          onTimeUpdate={handleTimeUpdate}
          onLoadedData={handleLoadedData}
        />
      )}
    </div>
  );
}

export default VideoPlayer;
