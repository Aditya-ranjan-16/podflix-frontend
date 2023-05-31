import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Navbar/Sidebar";
import PodcastContents from "../../components/Podcast/PodcastContents";
import axios from "axios";
import { useParams } from "react-router-dom";

function Index() {
  const [podcastData, setPodcastData] = useState(null);
  let { id } = useParams();
  const makereq = async () => {
    const res = await axios.post("api/podcast/podcastbyID", { id: id });
    const podcastdata = await res.data;

    setPodcastData(podcastdata);
  };
  useEffect(() => {
    makereq();
  }, []);
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          {podcastData != null && <PodcastContents data={podcastData} />}
        </div>
      </div>
    </div>
  );
}

export default Index;
