import React, { useContext } from "react";
import QuizDisplay from "../components/quiz game/QuizDisplay";
import ScheduleDisplay from "../components/quiz game/ScheduleDisplay";
import WaitingDisplay from "../components/quiz game/WaitingDisplay";
import { QuizGameSocketContext } from "../contexts/QuizGameSocketProvider";
import { ObjectInterface } from "../helpers/commonInterface";

function QuizGame() {
  const { data, setData } = useContext(QuizGameSocketContext);

  return (
    <div className="bg-neutral-50 h-screen flex flex-col">
      {/* State Controller */}
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

      {/* Main Content */}
      <div className="mx-auto w-full max-w-lg flex-1">
        {data.state === "0" && <ScheduleDisplay />}
        {data.state === "1" && <WaitingDisplay />}
        {data.state !== "0" && data.state !== "1" && <QuizDisplay />}
      </div>
    </div>
  );
}

export default QuizGame;
