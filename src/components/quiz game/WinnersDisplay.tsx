import React from "react";
import MotionDiv from "../widgets/MotionDiv";

function WinnersDisplay() {
  return (
    <MotionDiv className="flex-1 p-2 relative">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-extrabold py-8">Winners</h2>
        <div className="w-fit text-center">
          {[...Array(10)].map((x, index) => {
            return <p className="p-5 text-2xl">Bon Jovi Montes {index}</p>;
          })}
        </div>
      </div>
      <div className="absolute translate-x-1/2 inset-0 mix-blend-multiply">
        <div className="firework"></div>
      </div>
      <div className="absolute -translate-x-1/2 inset-0 mix-blend-multiply">
        <div className="firework"></div>
      </div>
    </MotionDiv>
  );
}

export default WinnersDisplay;
