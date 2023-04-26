import React from "react";

// Css
import NCss from "./Css/Nav.module.css";

// icons
import HomeIcon from "@mui/icons-material/Home";

export default function Nav() {
  return (
    <div className={NCss.mDiv}>
      <HomeIcon />
    </div>
  );
}
