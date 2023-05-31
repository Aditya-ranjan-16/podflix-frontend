import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react";
import img from "../../assets/music.jpg";
import B15 from "../../assets/Back15sec.png";
import F15 from "../../assets/Skip15sec.png";
import Back from "../../assets/skip-back.png";
import Fwd from "../../assets/skip-forward.png";
import Play from "../../assets/pause.png";
import Pause from "../../assets/Play-pause.png";
import Vol from "../../assets/volume.png";
import AuthContext from "../../store/auth-context";
import PlayerContext from "../../store/player-context";
function VideoPlayer() {
  const playerCtx = useContext(PlayerContext);
  const authCtx = useContext(AuthContext);
  const fileRef = playerCtx.fileref; // reference to audio element
  const [isPlaying, setIsPlaying] = useState(false); // state to track playing status
  const [focus, setFocus] = useState(false); // state to track playing status
  const [minimized, setMinimized] = useState(true); // state to track playing status
  const [volume, setVolume] = useState(0.5);

  const [type, setType] = useState("audio");
  const [src, setSrc] = useState("");
  // state to track current time
  const [duration, setDuration] = useState(0); // state to track audio duration

  const [playbackRate, setPlaybackRate] = useState(1);
  //==================================================================
  const progressBarRef = useRef();
  const btnRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const handleProgressChange = () => {
    fileRef.current.currentTime = progressBarRef.current.value;
  };
  const onLoadedMetadata = () => {
    const seconds = fileRef.current.duration;
    console.log("seconds=", seconds);
    setDuration(seconds);
    fileRef.current.currentTime = playerCtx.player.currentTime;
    fileRef.current.volume = playerCtx.player.volume;
    progressBarRef.current.max = seconds;
    if (playerCtx.clicked) {
      console.log("clicked");
      fileRef.current.play();
      setIsPlaying(true);
      playerCtx.setclicked(false);
    }
  };
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    if (!fileRef.current) return;
    const currentTime = fileRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [fileRef, duration, progressBarRef, setTimeProgress]);

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };
  //==================================================================
  const togglePlay = () => {
    if (isPlaying) {
      fileRef.current.pause();
    } else {
      fileRef.current.play();
      if (minimized && type === "video") {
        setMinimized(false);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const setPlayer = {
      volume: fileRef.current.volume,
      isPlaying: fileRef.current.paused ? false : true,
      src: src,
      type: type,
      currentTime: fileRef.current.currentTime,
      Duration: duration,
      playbackRate: fileRef.current.playbackRate,
    };

    localStorage.setItem("player", JSON.stringify(setPlayer));
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    fileRef.current.volume = newVolume;
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
  };

  const handleSpeedChange = (event) => {
    const speed = parseFloat(event.target.value);
    fileRef.current.playbackRate = speed;
    setPlaybackRate(speed);
  };

  useEffect(() => {
    console.log("mounted");
    playAnimationRef.current = requestAnimationFrame(repeat);
    if (playerCtx.player != null) {
      const data = playerCtx.player;

      if (Object.keys(data).length != 0 && fileRef.current) {
        setVolume(data.volume);

        setPlaybackRate(data.playbackRate);
        console.log("data=w", data.currentTime);
        setSrc(data.src);
        setType(data.type);

        fileRef.current.currentTime = data.currentTime;
        fileRef.current.volume = data.volume;
        fileRef.current.playbackRate = data.playbackRate;
        fileRef.current.src = data.src;
      }
    }
    if (playerCtx.clicked) {
      onLoadedMetadata();

      setMinimized(false);
    }
    return () => {
      cancelAnimationFrame(playAnimationRef.current);
    };
    // setSrc("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");
    // setType("video");
  }, [playerCtx.player, authCtx.isLoggedIn, playerCtx.clicked]);

  if (authCtx.isLoggedIn) {
    return (
      <div
        className={`bg-[#1c1c1c] flex  ${
          src == "" ? "hidden" : "block player_bar"
        }  items-center justify-center z-10 fixed bottom-0 ${
          type == "video" && !minimized
            ? " flex-col-reverse h-[100%] "
            : "flex-col h-[15%]"
        } w-[100%] text-white  `}
      >
        <div className="px-6 py-4 w-full flex justify-between">
          <div className="w-[20%] flex items-center justify-center ">
            <img className="w-[50px] h-[50px] rounded-md" src={img} />
          </div>

          <div className=" w-full flex flex-col-reverse justify-center  items-center">
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
              <div className="text-sm mr-2 w-5 flex items-end justify-center">
                {formatTime(timeProgress)}
              </div>

              <input
                type="range"
                min={0}
                className="w-[60%]"
                max={100}
                ref={progressBarRef}
                onChange={handleProgressChange}
              />

              <h1 className="text-sm">{formatTime(duration)}</h1>
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
        {type === "video" && !minimized && (
          <div
            onMouseOver={() => {
              setFocus(true);
            }}
            onClick={() => {
              console.log("clicked min");
              setIsPlaying(false);
              setMinimized(true);
              fileRef.current.pause();
            }}
            className={`${
              focus ? "block " : "hidden"
            } w-20 h-20 z-10  flex items-center justify-center absolute top-0 left-0 `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </div>
        )}
        {type === "video" ? (
          <video
            ref={fileRef}
            src={src}
            preload="auto"
            onMouseOver={() => {
              setFocus(true);
            }}
            onMouseOut={() => {
              setFocus(false);
            }}
            onClick={togglePlay}
            className={`${
              minimized ? "w-[0%] h-[0%]" : "w-[100%] h-[82%]"
            }  player_bar transition-all bg-black`}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={onLoadedMetadata}
          />
        ) : (
          <audio
            ref={fileRef}
            src={src}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={onLoadedMetadata}
          />
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default VideoPlayer;
