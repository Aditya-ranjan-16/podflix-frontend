import React, { useEffect, useState, useContext } from "react";
import share from "../../assets/share-2.png";

import PodAllEp from "./PodAllEp";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import ReactStars from "react-rating-stars-component";

import axios from "axios";
function PodcastContents({ data }) {
  const authCtx = useContext(AuthContext);
  const [ep, setEp] = useState([]);
  const [Subscribed, setSubscribed] = useState(false);

  const onSub = async () => {
    if (Subscribed == true) {
      const res = await axios.post(
        "/api/user/unSubscribe",
        { id: data._id },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${authCtx.token}`,
          },
        }
      );
      const mdata = res.data;
      if (mdata.exists == "false") {
        setSubscribed(false);
      }
    } else {
      const res = await axios.post(
        "/api/user/subscribe",
        { id: data._id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${authCtx.token}`,
          },
        }
      );
      const mdata = res.data;
      if (mdata.state == "success") {
        setSubscribed(true);
      }
    }
  };
  const makereq = async () => {
    console.log("jjd");
    const res = await axios.post(
      "api/user/checkSub",
      { id: data._id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authCtx.token}`,
        },
      }
    );
    const mdata = res.data;

    if (mdata.state === "false") {
      setSubscribed(false);
    } else {
      setSubscribed(true);
    }
  };
  useEffect(() => {
    if (authCtx.isLoggedIn) {
      console.log("hxhe");
      makereq();
    }
    setEp(data.episodes);
  }, []);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="bg-[#1e1e1e] w-[100%] text-white pl-[5%] pb-20 font-poppins">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 px-8 lg:px-24 pt-24 pb-8">
        <div className="w-[260px] sm:w-[300px] lg:w-[350px] h-[200px] sm:h-[260px] lg:h-[300px]">
          <img
            className="w-[260px] sm:w-[300px] lg:w-[350px] h-[200px] sm:h-[260px] lg:h-[300px]"
            height={300}
            width={350}
            src={`https://unusual-handbag-ox.cyclic.app${data.thumbnail[0]}`}
          />
        </div>
        <div className="pt-4 flex flex-col items-center lg:items-start w-full lg:w-[70%]">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold pb-2">
            {data.title}
          </h1>

          <h1 className=" text-lg sm:text-xl md:text-2xl">Name</h1>
          <br />
          <div className="flex space-x-3">
            {authCtx.isLoggedIn && (
              <button
                onClick={onSub}
                className="border-2 text-sm md:text-base rounded-md px-2 md:px-3 py-[2px] md:py-1"
              >
                {Subscribed ? "Subscribed" : "Un Subscribe"}
              </button>
            )}

            <button>
              <img className="w-5 md:w-6" src={share} />
            </button>
          </div>
          <div>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#EB740B"
            />
          </div>
          <br />
          <div>{data.des}</div>
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
