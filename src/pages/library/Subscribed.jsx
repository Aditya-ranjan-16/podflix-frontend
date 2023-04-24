import Sidebar from "../../components/Navbar/Sidebar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import SubscribedMain from "../../components/Subscribed/SubscribedMain";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import axios from "axios";
function Subscribed() {
  const authCtx = useContext(AuthContext);
  const [data, setData] = useState(null);
  const makereq = async () => {
    const res = await axios.get("/api/user/subData", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${authCtx.token}`,
      },
    });
    const data = res.data;
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    makereq();
  }, []);
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full">{data != null && <SubscribedMain />}</div>
      </div>
    </div>
  );
}

export default Subscribed;
