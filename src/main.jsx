import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PlayerContextProvider } from "./store/player-context.jsx";
import { AuthContextProvider } from "./store/auth-context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  </AuthContextProvider>
);
