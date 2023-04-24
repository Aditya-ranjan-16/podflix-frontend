import React, { useEffect, useState } from "react";
import share from "../../assets/share-2.png";
import heart from "../../assets/heart.svg";
import play from "../../assets/group 8.png";
import PodAllEp from "./PodAllEp";
import { Link } from "react-router-dom";

function PodcastContents({ data }) {
  const [ep, setEp] = useState([]);

  useEffect(() => {
    console.log(data);
    setEp(data.episodes);
  }, []);
  return (
    <div className="bg-[#1e1e1e] w-[100%] text-white pl-[5%] pb-20 font-poppins">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 px-8 lg:px-24 pt-24 pb-8">
        <div className="w-[260px] sm:w-[300px] lg:w-[350px] h-[200px] sm:h-[260px] lg:h-[300px]">
          <img
            className="w-[260px] sm:w-[300px] lg:w-[350px] h-[200px] sm:h-[260px] lg:h-[300px]"
            height={300}
            width={350}
            src={`http://localhost:5000${data.thumbnail[0]}`}
          />
        </div>
        <div className="pt-4 flex flex-col items-center lg:items-start w-full lg:w-[70%]">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold pb-2">
            {data.title}
          </h1>

          <h1 className=" text-lg sm:text-xl md:text-2xl">Name</h1>
          <br />
          <div className="flex space-x-3">
            <button className="border-2 text-sm md:text-base rounded-md px-2 md:px-3 py-[2px] md:py-1">
              Subscribe
            </button>
            <button>
              <img className="w-5 md:w-6" src={heart} />
            </button>
            <button>
              <img className="w-5 md:w-6" src={share} />
            </button>
          </div>
          <br />
          <div>{data.des}</div>
        </div>
      </div>
      <div className="px-8 md:px-24 pt-12">
        <div className="rounded-xl shadow-md shadow-black bg-[#161616]">
          <div className="p-4">
            <h1 className="text-[#A3A3A3] pb-2">Continue Listening</h1>
            <h1 className="text-[#EB740B] text-3xl font-semibold">Title</h1>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              beatae ea omnis ab placeat accusamus nemo tenetur, aut
              repudiandae, et facere perspiciatis quas delectus hic tempora
              pariatur consectetur. Facilis veniam repellendus suscipit impedit,
              fugiat dolores delectus ipsa incidunt eveniet debitis accusantium
              animi itaque, tempora tenetur ab nulla distinctio laboriosam,
              perspiciatis consequuntur saepe hic. Sunt esse nam quidem
              laboriosam autem amet quae cumque fuga pariatur, veritatis impedit
              a rem in corporis!
            </p>
            <br />
            <div className="flex items-center space-x-2">
              <Link to="/podcast/episodeplay">
                {" "}
                <img className="w-6 sm:w-8" src={play} />
              </Link>

              <h1 className="text-sm sm:text-base">31:42:05</h1>
              <div className="bg-gray-500 rounded-full h-1 w-[100px]">
                <div className="bg-[#eb740b] rounded-full h-1 w-[50%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-24 pt-12">
        <h1 className="text-xl pb-1 font-semibold text-[#A3A3A3]">
          All Episodes
        </h1>
        <hr className="border-[1px] border-[#A3A3A3]" />
        <div className="pt-4">
          {ep.map((ep) => (
            <Link to={`/podcast/episode/${ep._id}`}>
              <div className="py-4">
                <PodAllEp data={ep} />
                <hr className="border-[1px] border-[#A3A3A3] mt-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PodcastContents;
