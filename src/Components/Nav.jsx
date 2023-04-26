import React from "react";
import { Link } from "react-router-dom";

// Css
import NCss from "./Css/Nav.module.css";

// icons
import FitbitIcon from "@mui/icons-material/Fitbit";
import HomeIcon from "@mui/icons-material/Home";
import MicNoneIcon from "@mui/icons-material/MicNone";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function Nav() {
  return (
    <div className={NCss.mDiv}>
      <div className={NCss.innerDiv}>
        <div className={NCss.LogoDiv}>
          <Link to="/" className="LinkStyle">
            <FitbitIcon fontSize="large" />
          </Link>
        </div>
        <Link to="/Login" className="LinkStyle">
          <PersonOutlineIcon />
          {/* <HomeIcon /> */}
        </Link>
        <Link to="/Audio" className="LinkStyle">
          <MicNoneIcon />
        </Link>
        <Link to="/Videos" className="LinkStyle">
          <OndemandVideoIcon />
        </Link>
        <Link to="/Library" className="LinkStyle">
          <LocalLibraryIcon />
        </Link>
        <Link to="/Search" className="LinkStyle">
          <SearchIcon />
        </Link>
        <div className={NCss.hoverApper}>
          <Link to="/Login" className="LinkStyle">
            <p>Login</p>
          </Link>
          <Link to="/Audio" className="LinkStyle">
            <p>Audio</p>
          </Link>
          <Link to="/Videos" className="LinkStyle">
            <p>Video</p>
          </Link>
          <Link to="/Library" className="LinkStyle">
            <p>Library</p>
          </Link>
          <Link to="/Search" className="LinkStyle">
            <p>Search</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
