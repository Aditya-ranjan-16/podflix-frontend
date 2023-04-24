import React, { useRef, useState } from "react";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import { Link } from "react-router-dom";
import thumb from "../../assets/thumb.svg";

function VidThumbForm() {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };
  const [selectimg, setselectimg] = useState();
  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    if (event.target.files && event.target.files[0]) {
      setselectimg(fileObj.name);
    }
    // 👇️ reset file input
    event.target.value = null;
    console.log(fileObj.name);
  };
  return (
    <div>
      <div className="font-poppins flex">
        <DashboardSidebar />
        <div className="w-[100%] pl-[15%] bg-[#0f0f0f] pt-20 pb-8 h-[100vh]">
          <h1 className="text-white pl-12 text-3xl font-semibold">
            Add Episode
          </h1>
          <div className="px-16 flex justify-between">
            <div className="text-white w-[47%] flex flex-col items-center pt-8">
              <div className="border-2 border-dotted rounded-xl w-[80%] h-[400px] p-4">
                <div className="bg-gray-300 h-[358px] flex flex-col justify-center items-center rounded-xl">
                  <button onClick={handleClick}>
                    <img src={thumb} className="w-8" />
                    <input
                      ref={inputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      type="file"
                    />
                  </button>

                  <h1 className="text-[#3E3E3E] text-xl">
                    Add Video Thumbnail
                  </h1>
                </div>
              </div>
            </div>
            <div className="text-white flex flex-col items-center w-[47%]">
              <div className="w-[80%] pb-6">
                <h1 className="text-3xl text-[#EB740B] font-semibold pb-2">
                  Title
                </h1>
                <h1>hello</h1>
              </div>
              <div className="w-[80%] pb-6">
                <h1 className="text-3xl text-[#EB740B] font-semibold pb-2">
                  Description
                </h1>
                <p>knsdxnk</p>
              </div>
              <div className="w-[80%] pb-6">
                <h1 className="text-3xl text-[#EB740B] font-semibold pb-2">
                  Episode
                </h1>
                <h1>ep1</h1>
              </div>

              <div className="w-[80%] pt-8">
                <Link to="/dashboard/vidthumbnailform">
                  <button className="border-2 bg-[#161616] border-[#EB740B] font-semibold rounded-full text-[#EB740B] text-2xl px-4 py-1">
                    Upload
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VidThumbForm;
