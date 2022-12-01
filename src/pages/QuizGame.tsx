import React, { useContext, useEffect } from "react";
import QuizDisplay from "../components/quiz game/QuizDisplay";
import ScheduleDisplay from "../components/quiz game/ScheduleDisplay";
import WaitingDisplay from "../components/quiz game/WaitingDisplay";
import { QuizGameSocketContext } from "../contexts/QuizGameSocketProvider";
import { ObjectInterface } from "../helpers/commonInterface";

function QuizGame() {
  const { data, setData } = useContext(QuizGameSocketContext);

  useEffect(() => {}, []);
  return (
    <div className="bg-neutral-50 h-screen flex flex-col">
      <section className="flex justify-around py-10 border-4">
        <button
          onClick={() =>
            setData((prev: ObjectInterface) => {
              const state = (parseInt(prev.state) - 1).toString();
              return { ...prev, state };
            })
          }
        >
          Back
        </button>
        {data.state}
        <button
          onClick={() =>
            setData((prev: ObjectInterface) => {
              const state = (parseInt(prev.state) + 1).toString();
              return { ...prev, state };
            })
          }
        >
          Next
        </button>
      </section>
      <div className="mx-auto w-full max-w-lg flex-1">
        {data.state === "0" && <ScheduleDisplay />}
        {data.state === "1" && <WaitingDisplay />}
        {data.state === "2" && <QuizDisplay />}
      </div>
    </div>
  );
}

export default QuizGame;
