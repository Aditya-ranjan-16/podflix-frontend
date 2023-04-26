import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext, Suspense } from "react";

// Pages
const Home = React.lazy(() => import("./Pages/Home"));
const Error = React.lazy(() => import("./Pages/Error"));
const Login = React.lazy(() => import("./Pages/Login"));

// Components
import Footer from "./Components/Footer";

// Loading
import Loading from "./Pages/Loading";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/Login"
            element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            }
          />
          {/* {!authCtx.isLoggedIn && (
            <Route
              path="/login"
              element={
                <Suspense fallback={<Loading />}>
                  <LoginMain />
                </Suspense>
              }
            />
          )}
          {!authCtx.isLoggedIn && (
            <Route
              path="/register"
              element={
                <Suspense fallback={<Loading />}>
                  <Register />
                </Suspense>
              }
            />
          )} */}
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <Error />
              </Suspense>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
