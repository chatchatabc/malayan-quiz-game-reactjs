import React, { useContext } from "react";
import Advertisement from "../components/quiz game/Advertisement";
import PreparingQuestion from "../components/quiz game/PreparingQuestion";
import QuizDisplay from "../components/quiz game/QuizDisplay";
import QuizState from "../components/quiz game/QuizState";
import ScheduleDisplay from "../components/quiz game/ScheduleDisplay";
import WaitingDisplay from "../components/quiz game/WaitingDisplay";
import WinnersDisplay from "../components/quiz game/WinnersDisplay";
import { QuizGameSocketContext } from "../contexts/QuizGameSocketProvider";

const in_game_states = ["START_QUESTION", "END_QUESTION", "SHOW_ANSWER"];

function QuizGame() {
  const { data } = useContext(QuizGameSocketContext);

  return (
    <div className="bg-neutral-50 flex flex-col flex-1">
      {/* State Controller */}
      <QuizState />

      {/* Main Content */}
      <div className="mx-auto w-full max-w-lg flex-1 flex flex-col">
        {data.state === "NONE" && <ScheduleDisplay />}
        {data.state === "QUEUEING" && <WaitingDisplay />}
        {data.state === "STARTED" && <Advertisement />}
        {data.state === "GET_READY" && <PreparingQuestion />}
        {in_game_states.includes(data.state) && <QuizDisplay />}
        {data.state === "SHOW_WINNERS" && <WinnersDisplay />}
      </div>
    </div>
  );
}

export default QuizGame;
