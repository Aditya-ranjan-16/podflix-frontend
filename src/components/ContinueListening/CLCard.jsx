import fav from "../../assets/Vector.svg";
import sub from "../../assets/Subscribe.svg";
import shr from "../../assets/share-2.png";

function CLCard(props) {
  return (
    <div className="w-[150px] sm:w-[200px] h-[180px] sm:h-[240px]">
      <div className="relative">
        <div className="absolute flex justify-between w-full bottom-0 px-2 pb-2">
          <div className="flex space-x-2">
            <img src={fav} width={20} />
            <img src={sub} width={20} />
          </div>
          <div>
            <img src={shr} width={20} />
          </div>
        </div>
        <img
          className="rounded-xl  h-[180px] sm:h-[240px]"
          width={200}
          height={240}
          src={props.image}
          alt=""
        />
      </div>
    </div>
  );
}

export default CLCard;
