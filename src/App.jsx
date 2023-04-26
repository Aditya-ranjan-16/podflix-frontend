import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useContext, Suspense } from "react";

// Pages
const Home = React.lazy(() => import("./pages/Home"));
const Error = React.lazy(() => import("./pages/Error"));

function App() {
  return <div>Hello World</div>;
}

export default App;
