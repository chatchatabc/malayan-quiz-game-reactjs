import React, { useContext } from "react";
import { QuizGameSocketContext } from "../../contexts/QuizGameSocketProvider";
import QuizChoices from "./QuizChoices";
import QuizQuestion from "./QuizQuestion";

function QuizDisplay() {
  const { data } = useContext(QuizGameSocketContext);
  const { countdown } = data;
  return (
    <div className="h-screen flex flex-col">
      <section
        className={`bg-red-600 duration-300 ease-linear text-white text-center font-bold ${
          countdown ? "h-0" : "p-2"
        }`}
      >
        You lost! But you can still continue playing!
      </section>
      <section>
        <QuizQuestion />
      </section>
      <section className="flex-1 overflow-y-auto">
        <QuizChoices />
      </section>
    </div>
  );
}

export default QuizDisplay;
