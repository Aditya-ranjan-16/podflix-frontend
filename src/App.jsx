import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useContext, Suspense } from "react";

//pages
const IndexMain = React.lazy(() => import("./pages/IndexMain"));
const Register = React.lazy(() => import("./pages/Register"));
const Search = React.lazy(() => import("./pages/Search"));
const PopularGenres = React.lazy(() => import("./pages/PopularGenres"));
const VideoMain = React.lazy(() => import("./pages/VideoMain"));
const AudioMain = React.lazy(() => import("./pages/AudioMain"));
const LoginMain = React.lazy(() => import("./pages/LoginMain"));
//podcast
const Episode = React.lazy(() => import("./pages/podcast/Episode"));
const PodIndex = React.lazy(() => import("./pages/podcast/Index"));
//library
const LibIndex = React.lazy(() => import("./pages/library/Subscribed"));
//dashboard
const DashIndex = React.lazy(() => import("./pages/dashboard/Index"));
const PodcastPage = React.lazy(() => import("./pages/dashboard/PodcastPage"));
const Form = React.lazy(() => import("./pages/dashboard/Form"));
const EpForm = React.lazy(() => import("./pages/dashboard/EpForm"));
const YourPodcast = React.lazy(() => import("./pages/dashboard/YourPodcast"));
const VidThumbForm = React.lazy(() => import("./pages/dashboard/VidThumbForm"));

import AuthContext from "./store/auth-context";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

const LoadingPage = () => {
  return <div>Loading</div>;
};
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Router>
        <Routes>
          {/* pages */}
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingPage />}>
                {" "}
                <IndexMain />
              </Suspense>
            }
          />

          {!authCtx.isLoggedIn && (
            <Route
              path="/login"
              element={
                <Suspense fallback={<LoadingPage />}>
                  {" "}
                  <LoginMain />
                </Suspense>
              }
            />
          )}
          {!authCtx.isLoggedIn && (
            <Route
              path="/register"
              element={
                <Suspense fallback={<LoadingPage />}>
                  {" "}
                  <Register />
                </Suspense>
              }
            />
          )}

          <Route
            path="/audio"
            element={
              <Suspense fallback={<LoadingPage />}>
                {" "}
                <AudioMain />
              </Suspense>
            }
          />
          <Route
            path="/video"
            element={
              <Suspense fallback={<LoadingPage />}>
                {" "}
                <VideoMain />
              </Suspense>
            }
          />
          <Route
            path="/populargenres"
            element={
              <Suspense fallback={<LoadingPage />}>
                {" "}
                <PopularGenres />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<LoadingPage />}>
                {" "}
                <Search />
              </Suspense>
            }
          />
          {/* podcast */}
          <Route
            path="/podcast/:id"
            element={
              <Suspense fallback={<LoadingPage />}>
                {" "}
                <PodIndex />
              </Suspense>
            }
          />
          <Route
            path="podcast/episode/:id"
            element={
              <Suspense fallback={<LoadingPage />}>
                {" "}
                <Episode />
              </Suspense>
            }
          />
          {/* library */}
          <Route
            path="/library"
            element={
              <Suspense fallback={<LoadingPage />}>
                {" "}
                <LibIndex />
              </Suspense>
            }
          />

          {/* dashboard */}

          {authCtx.isLoggedIn && (
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={<LoadingPage />}>
                  {" "}
                  <DashIndex />
                </Suspense>
              }
            />
          )}
          {authCtx.isLoggedIn && (
            <Route
              path="/dashboard/epform"
              element={
                <Suspense fallback={<LoadingPage />}>
                  {" "}
                  <EpForm />
                </Suspense>
              }
            />
          )}
          {authCtx.isLoggedIn && (
            <Route
              path="/dashboard/form"
              element={
                <Suspense fallback={<LoadingPage />}>
                  {" "}
                  <Form />
                </Suspense>
              }
            />
          )}
          {authCtx.isLoggedIn && (
            <Route
              path="/dashboard/podcastpage"
              element={
                <Suspense fallback={<LoadingPage />}>
                  {" "}
                  <PodcastPage />
                </Suspense>
              }
            />
          )}
          {authCtx.isLoggedIn && (
            <Route
              path="/dashboard/vidthumbnailform"
              element={
                <Suspense fallback={<LoadingPage />}>
                  {" "}
                  <VidThumbForm />
                </Suspense>
              }
            />
          )}
          {authCtx.isLoggedIn && (
            <Route
              path="/dashboard/yourpodcast"
              element={
                <Suspense fallback={<LoadingPage />}>
                  {" "}
                  <YourPodcast />
                </Suspense>
              }
            />
          )}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
