import React from "react";

function PGCard(props) {
  return (
    <div className="w-[260px] sm:w-[300px] h-[150px] sm:h-[200px]">
      <div>
        <img
          className="rounded-xl w-[260px] sm:w-[300px] h-[150px] sm:h-[200px]"
          src={props.image}
          alt=""
        />
      </div>
    </div>
  );
}

export default PGCard;
