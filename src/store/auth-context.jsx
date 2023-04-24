import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  user: {
    name: "",
    pic: "",
    email: "",
    bio: "",
  },
  target: null,
  player: {
    volume: "",
    src: "",
    type: "",
    currentTime: "",
    displayDuration: 0.0,
    playbackRate: "",
  },
  fileref: null,
  login: async () => {},
  logout: () => {},
  settarget: () => {},
  setplayer: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();

  const remainingDuration = expirationTime - currentTime;

  return remainingDuration;
};
const retrievePlayerToken = () => {
  if (typeof window !== "undefined") {
    const playerdata = localStorage.getItem("player");
    const finalplayer = JSON.parse(playerdata);

    return finalplayer;
  }
};
const retrieveStoredToken = () => {
  if (typeof window !== "undefined") {
    const storedToken = localStorage.getItem("token");
    const userdata = localStorage.getItem("user");
    const storedExpirationDate = localStorage.getItem("expirationTime");

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 3600) {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
      localStorage.removeItem("user");
      return null;
    }
    var ms = remainingTime,
      min = Math.floor((ms / 1000 / 60) << 0),
      sec = Math.floor((ms / 1000) % 60);

    console.log(min + ":" + sec);

    const finaluser = JSON.parse(userdata);
    return {
      token: storedToken,
      duration: remainingTime,
      user: finaluser,
    };
  }
};

export const AuthContextProvider = (props) => {
  const [tokenData, settokenData] = useState(null);
  const [playerData, setplayerData] = useState(null);
  const fileref = useRef(null);
  let initialToken = null;
  let initialuser = {};
  let initialplayer = {};
  let logedin = false;
  if (tokenData != null) {
    initialToken = tokenData.token;
    initialuser = tokenData.user;
    logedin = true;
    if (playerData != null) {
      initialplayer = playerData;
    }
  }

  const [token, setToken] = useState(initialToken);
  const [player, setPlayer] = useState(initialplayer);
  const [user, setUser] = useState(initialuser);
  const [target, setTarget] = useState("");
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(logedin);

  console.log("userislogedin : -" + userIsLoggedIn);

  const targetHandler = (t) => {
    setTarget(t);
  };
  const playerHandler = (v) => {
    localStorage.setItem("player", JSON.stringify(v));
    setPlayer(v);
  };
  const logoutHandler = useCallback(() => {
    setToken(null);
    setUserIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("user");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (name, email, pic, bio, token, expirationTime) => {
    localStorage.setItem("token", token);
    console.log("helldfifjirfrjfirr");
    const setuserdata = { name: name, pic: pic, email: email, bio: bio };

    localStorage.setItem("user", JSON.stringify(setuserdata));

    const nowTime = new Date().getTime();
    const exptime = nowTime + expirationTime;
    const remainingTime = calculateRemainingTime(exptime);
    localStorage.setItem("expirationTime", exptime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);

    setUser(setuserdata);
    setToken(token);
    setUserIsLoggedIn(true);
  };

  useEffect(() => {
    if (tokenData != null) {
      setToken(tokenData.token);
      setUser(tokenData.user);
      setUserIsLoggedIn(true);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
      //player data
      if (playerData != null) {
        console.log("retrived", playerData);
        setPlayer(playerData);
      } else {
        const tkp = retrievePlayerToken();

        setplayerData(tkp);
      }
      //player data
    } else {
      const tkd = retrieveStoredToken();

      settokenData(tkd);
    }
  }, [tokenData, playerData, logoutHandler]);

  const contextValue = useMemo(
    () => ({
      token: token,
      isLoggedIn: userIsLoggedIn,
      user: user,
      target: target,
      player: player,
      fileref: fileref,
      setplayer: playerHandler,
      login: loginHandler,
      logout: logoutHandler,
      settarget: targetHandler,
    }),
    [token, player, userIsLoggedIn, target]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
