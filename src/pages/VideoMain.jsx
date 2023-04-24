import Sidebar from "../components/Navbar/Sidebar";
import VideoContent from "../components/Video/VideoContent";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

function VideoMain() {
  return (
    <div className="bg-black">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <VideoContent />
        </div>
      </div>
    </div>
  );
}

export default VideoMain;
