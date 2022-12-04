import React, { useContext } from "react";
import { QuizGameSocketContext } from "../../contexts/QuizGameSocketProvider";
import MotionDiv from "../widgets/MotionDiv";
import QuizChoices from "./QuizChoices";
import QuizQuestion from "./QuizQuestion";

function QuizDisplay() {
  const { data } = useContext(QuizGameSocketContext);
  return (
    <div className="h-screen flex flex-col">
      {/* Banner */}
      {data.state === "3" && (
        <MotionDiv
          className={`bg-red-600 duration-300 ease-linear text-white text-center font-bold`}
          initial={{ height: 0 }}
          animate={{ height: "unset", padding: "0.5rem" }}
          transition={{ duration: 0.3 }}
        >
          You lost! But you can still continue playing!
        </MotionDiv>
      )}

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
