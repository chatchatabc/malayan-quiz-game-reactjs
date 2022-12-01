import React, { useContext } from "react";
import { QuizGameSocketContext } from "../../contexts/QuizGameSocketProvider";
import QuizChoices from "./QuizChoices";
import QuizQuestion from "./QuizQuestion";

function QuizDisplay() {
  const { data } = useContext(QuizGameSocketContext);
  const { countdown } = data;
  return (
    <div className="h-screen flex flex-col relative">
      <section className="">You Lose</section>
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
