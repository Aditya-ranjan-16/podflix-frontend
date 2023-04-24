import React, { useContext, useEffect, useRef, useState } from "react";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import au from "../../assets/headphones.svg";
import vi from "../../assets/video.svg";
import thumb from "../../assets/thumb.svg";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import AuthContext from "../../store/auth-context";

function Form() {
  const redirect = useNavigate();
  const [audioBg, setaudioBg] = useState("");
  const [videoBg, setvideoBg] = useState("");

  const audioClick = () => {
    setaudioBg("bg-[#EB740B]");
    setvideoBg("");
  };
  const videoClick = () => {
    setvideoBg("bg-[#EB740B]");
    setaudioBg("");
  };

  // state logics

  const tagRef = useRef();
  const authCtx = useContext(AuthContext);
  const [formdata, setFormdata] = useState({
    title: "",
    des: "",
    thumbnail: "",
    tags: [],
    category: "Select",
  });
  const onChange = (e) => {
    var val = e.target.value;
    if (e.target.name == "thumbnail") {
      val = e.target.files[0];
    }
    setFormdata({ ...formdata, [e.target.name]: val });
  };
  const addTag = () => {
    const val = tagRef.current.value;
    var newdata = formdata.tags;
    newdata.push(val);
    setFormdata({ ...formdata, ["tags"]: newdata });
    console.log(formdata);
    tagRef.current.value = "";
  };
  const removeTag = (val) => {
    var newdata = formdata.tags.filter((v) => v !== val);

    setFormdata({ ...formdata, ["tags"]: newdata });
  };

  const oncreate = async () => {
    const formData = new FormData();
    Object.keys(formdata).forEach((key) => {
      formData.append(key, formdata[key]);
    });
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    const res = await axios.post("/api/podcast/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${authCtx.token}`,
      },
    });

    redirect("/dashboard/yourpodcast");
  };

  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <div className="font-poppins flex">
        <DashboardSidebar />
        <div className="w-[100%] pl-[80px] lg:pl-[200px] bg-[#0f0f0f] pt-20 pb-8">
          <h1 className="text-white pl-12 text-xl sm:text-2xl md:text-3xl font-semibold">
            Add Podcast
          </h1>
          <div className="px-6 lg:px-16 flex flex-col items-center xl:items-start lg:flex-row justify-between w-full">
            <div className="text-white w-full lg:w-[47%] flex flex-col items-center pt-8">
              <div className="border-2 border-dotted rounded-xl w-[90%] sm:w-[80%] h-[340px] sm:h-[400px] p-4">
                <div className="bg-gray-300 h-[308px] sm:h-[368px] flex flex-col justify-center items-center rounded-xl">
                  <button onClick={handleClick}>
                    <img src={thumb} className="w-8" />
                    <input
                      ref={inputRef}
                      // onChange={handleFileChange}
                      className="hidden"
                      type="file"
                      name="thumbnail"
                      onChange={onChange}
                    />
                  </button>

                  <h1 className="text-[#3E3E3E] text-lg sm:text-xl">
                    Add Thumbnail
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-start w-[80%] py-4">
                <h1 className="text-lg sm:text-xl md:text-3xl text-[#EB740B] font-semibold pb-2">
                  Type
                </h1>
                <div className="flex items-center pt-2">
                  <button
                    onClick={audioClick}
                    className={`border-[1px] ${audioBg} flex space-x-2 items-center rounded-l-full px-4 py-1`}
                  >
                    <img className="w-4" src={au} />
                    <h1>Audio</h1>
                  </button>
                  <button
                    onClick={videoClick}
                    className={`border-[1px] ${videoBg} first-letter:first-line:
                     flex space-x-2 items-center rounded-r-full px-4 py-1`}
                  >
                    <img className="w-4" src={vi} />
                    <h1>Video</h1>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-white flex flex-col items-center lg:w-[47%] w-full">
              <div className="w-[80%] pb-6">
                <h1 className="text-lg sm:text-xl md:text-3xl text-[#EB740B] font-semibold pb-2">
                  Add Title
                </h1>
                <input
                  className="bg-[#0f0f0f] border-[1px] rounded-lg w-full text-lg sm:text-xl p-1"
                  type="text"
                  name="title"
                  onChange={onChange}
                  value={formdata.title}
                />
              </div>
              <div className="w-[80%] pb-6">
                <h1 className="text-lg sm:text-xl md:text-3xl text-[#EB740B] font-semibold pb-2">
                  Add Description
                </h1>
                <textarea
                  rows="3"
                  className="bg-[#0f0f0f]  border-[1px] rounded-lg w-full text-lg sm:text-xl p-1"
                  name="des"
                  onChange={onChange}
                  value={formdata.des}
                />
              </div>
              <div className="w-[80%] pb-6">
                <h1 className="text-lg sm:text-xl md:text-3xl text-[#EB740B] font-semibold pb-2">
                  Select Category
                </h1>
                <select
                  className="bg-[#0f0f0f] border-[1px] rounded-lg w-full text-lg sm:text-xl p-1"
                  name="category"
                  value={formdata.category}
                  onChange={onChange}
                >
                  <option value="select" selected hidden>
                    Select
                  </option>
                  <option name="type" value="Cat A">
                    cat A
                  </option>

                  <option name="type" value="Cat A">
                    cat A
                  </option>
                  <option name="type" value="Cat A">
                    cat A
                  </option>
                </select>
              </div>
              <div className="w-[80%] pb-8">
                <h1 className="text-lg sm:text-xl md:text-3xl text-[#EB740B] font-semibold pb-2">
                  Add Tags
                </h1>
                {/* <div className="h-[120px]">
                  <input
                    onKeyDown={handleKeydown}
                    className="bg-[#0f0f0f] border-[1px] rounded-lg w-full text-xl p-1"
                    type="text"
                  />
                  <div className="bg-[#0f0f0f] grid grid-cols-3 gap-2 rounded-lg w-full text-lg p-2 mt-2">
                    {tags.map((tag, index) => (
                      <div
                        className="border-2 flex justify-between rounded-full px-2 bg-gray-900"
                        key={index}
                      >
                        <span className="px-1">{tag}</span>
                        <span
                          onClick={() => removeTags(index)}
                          className="rounded-full cursor-pointer"
                        >
                          &times;
                        </span>
                      </div>
                    ))}
                  </div>
                </div> */}
                <div className="h-[120px]">
                  <div className="flex">
                    <input
                      className="bg-[#0f0f0f] border-[1px] rounded-lg w-full text-lg p-1"
                      ref={tagRef}
                      type="text"
                    ></input>{" "}
                    <div
                      className="border-2 w-fit px-2 py-1 ml-2 rounded-lg"
                      onClick={addTag}
                    >
                      Add
                    </div>
                  </div>

                  {formdata.tags.length != 0 ? (
                    <>
                      <div className="bg-[#0f0f0f] flex flex-wrap space-x-2 rounded-lg w-full text-lg p-2 mt-2">
                        {formdata.tags.map((v, i) => (
                          <div
                            className="border-2 flex w-fit justify-between rounded-full px-2 bg-gray-900 mb-2"
                            key={v}
                          >
                            {v}{" "}
                            <div
                              className="rounded-full cursor-pointer ml-2 "
                              onClick={() => removeTag(v)}
                            >
                              <span className="text-red-700 ">x</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="w-[80%]">
                <button
                  onClick={oncreate}
                  className="border-2 bg-[#161616] border-[#EB740B] font-semibold rounded-full text-[#EB740B] text-lg sm:text-xl md:text-2xl px-4 py-1"
                >
                  Create Podcast
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
