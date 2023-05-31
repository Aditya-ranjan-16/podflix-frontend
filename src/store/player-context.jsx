import React, { useState, useEffect, useMemo, useRef } from "react";

const PlayerContext = React.createContext({
  player: {
    volume: "",
    isPlaying: false,
    src: "",
    type: "",
    currentTime: 0.0,
    Duration: 0.0,
    playbackRate: "",
  },
  fileref: null,
  clicked: false,
  settarget: () => {},
  setplayer: () => {},
  setclicked: () => {},
});

const retrievePlayerToken = () => {
  const playerdata = localStorage.getItem("player");
  const finalplayer = JSON.parse(playerdata);
  return finalplayer;
};

export const PlayerContextProvider = (props) => {
  const [playerData, setplayerData] = useState(null);
  const [clicked, setClicked] = useState(false);
  const fileref = useRef(null);

  let initialplayer = null;
  if (playerData != null) {
    initialplayer = playerData;
  }

  const [player, setPlayer] = useState(initialplayer);

  const playerHandler = (v) => {
    localStorage.setItem("player", JSON.stringify(v));
    setPlayer(v);
  };

  useEffect(() => {
    if (playerData != null) {
      // console.log("retrived", playerData);
      setPlayer(playerData);
    } else {
      const tkp = retrievePlayerToken();
      console.log("retrived", tkp);
      setplayerData(tkp);
    }
  }, [playerData]);
  const contextValue = useMemo(
    () => ({
      player: player,
      fileref: fileref,
      clicked: clicked,
      setclicked: setClicked,
      setplayer: playerHandler,
    }),
    [player, fileref]
  );
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
