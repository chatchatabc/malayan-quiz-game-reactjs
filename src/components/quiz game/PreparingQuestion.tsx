import React, { useEffect, useState } from "react";
import MotionDiv from "../widgets/MotionDiv";

function PreparingQuestion() {
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    setStart(true);
    if (timer) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [timer]);
  return (
    <MotionDiv className="px-2 flex flex-col flex-1 items-center">
      <h2 className="py-20 text-5xl">Get Ready in...</h2>
      <div className="relative rounded-full w-1/2 aspect-square overflow-hidden flex justify-center items-center">
        <div
          className={`bg-blue-500 absolute w-full transition-all delay-500 duration-[4.5s] ease-linear ${
            start ? "h-full" : "h-0"
          }`}
        ></div>
        <div className="bg-neutral-50 rounded-full w-[90%] aspect-square relative flex justify-center items-center p-5">
          <p className={`text-5xl font-bold ${timer ? "animate-bounce" : ""}`}>
            {timer}
          </p>
        </div>
      </div>
    </MotionDiv>
  );
}

export default PreparingQuestion;
