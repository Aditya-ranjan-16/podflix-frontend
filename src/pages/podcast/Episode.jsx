import Sidebar from "../../components/Navbar/Sidebar";
import EpisodeContent from "../../components/Podcast/EpisodeContent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Episode() {
  let { id } = useParams();
  const [episodeData, setEpisodeData] = useState(null);
  const makereq = async () => {
    const res = await axios.post("api/episode/getByID/", { id: id });
    const episodedata = await res.data;
    setEpisodeData(episodedata);
  };
  useEffect(() => {
    makereq();
  }, []);
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          {episodeData != null && (
            <>
              <EpisodeContent data={episodeData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Episode;
