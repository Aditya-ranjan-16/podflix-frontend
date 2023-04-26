import React from "react";

// Css
import NCss from "./Css/Nav.module.css";

// icons
import HomeIcon from "@mui/icons-material/Home";
import MicNoneIcon from "@mui/icons-material/MicNone";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SearchIcon from "@mui/icons-material/Search";

export default function Nav() {
  return (
    <div className={NCss.mDiv}>
      <HomeIcon />
      <MicNoneIcon />
      <OndemandVideoIcon />
      <LocalLibraryIcon />
      <SearchIcon />
    </div>
  );
}
