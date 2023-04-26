import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useContext, Suspense } from "react";

// Pages
const IndexMain = React.lazy(() => import("./pages/IndexMain"));

function App() {
  return <div>Hello World</div>;
}

export default App;
