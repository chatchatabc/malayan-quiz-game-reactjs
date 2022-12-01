import React, { useContext, useEffect, useMemo, useState } from "react";
import { QuizGameSocketContext } from "../../contexts/QuizGameSocketProvider";
import { ObjectInterface } from "../../helpers/commonInterface";

function QuizQuestion() {
  const { data, setData } = useContext(QuizGameSocketContext);
  const { countdown } = data;
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
    let interval: number;
    if (countdown) {
      interval = setInterval(() => {
        setData((prev: ObjectInterface) => ({
          ...prev,
          countdown: prev.countdown - 1,
        }));
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [countdown]);
  return (
    <div className="relative bg-neutral-100">
      <div
        style={{ transitionDuration: `${countdown ?? 10}s` }}
        className={`bg-blue-100 absolute inset-0 transition-all ease-linear ${
          start ? "w-0" : "w-full"
        }`}
      ></div>
      <div className="relative p-5 space-y-3">
        <div className={`flex items-center`}>
          <div className="flex-1">
            <h2 className="text-3xl font-bold">Q1 of 10</h2>
            <div className="grid grid-cols-2">
              <p>Check 1</p>
              <p>X 3</p>
            </div>
          </div>
          <div className="gap-2 p-2 text-center">
            <div
              className={`py-2 px-6 border rounded-full ml-auto font-bold text-white duration-150 ${
                countdown ? "bg-blue-500 w-1/2" : "bg-black w-full"
              }`}
            >
              <p
                className={`duration-300 ${
                  countdown ? "opacity-100" : "opacity-0 h-0"
                }`}
              >
                {countdown}
              </p>
              <p
                className={`duration-300 ${
                  countdown ? "opacity-0 h-0" : "opacity-100"
                }`}
              >
                Time's Up!
              </p>
            </div>
          </div>
        </div>
        <div className="text-justify font-bold leading-tight text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro neque
          sit quis blanditiis aliquid voluptates ratione explicabo, qui
          repudiandae. Architecto commodi possimus corrupti labore culpa
          doloremque beatae saepe officiis maiores.
        </div>
      </div>
    </div>
  );
}

export default QuizQuestion;
