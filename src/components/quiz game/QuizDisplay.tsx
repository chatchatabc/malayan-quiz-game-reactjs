import React, { useContext } from "react";
import { QuizGameSocketContext } from "../../contexts/QuizGameSocketProvider";
import MotionDiv from "../widgets/MotionDiv";
import QuizChoices from "./QuizChoices";
import QuizQuestion from "./QuizQuestion";

function QuizDisplay() {
  const { data } = useContext(QuizGameSocketContext);
  const { attrs = {} } = data;
  const { isCorrect } = attrs;
  return (
    <MotionDiv className="flex-1 flex flex-col">
      {/* Banner */}
      {data.state === "SHOW_ANSWER" && (
        <MotionDiv
          className={`${
            isCorrect ? "bg-green-500" : "bg-red-500"
          } duration-300 ease-linear text-white text-center font-bold`}
          initial={{ height: 0 }}
          animate={{ height: "unset", padding: "0.5rem" }}
          transition={{ duration: 0.3 }}
        >
          {isCorrect
            ? "You're Correct! Please wait for the next question!"
            : "You lost! But you can still continue playing!"}
        </MotionDiv>
      )}

      <section>
        <QuizQuestion />
      </section>
      <section className="flex-1 overflow-y-auto">
        <QuizChoices />
      </section>
    </MotionDiv>
  );
}

export default QuizDisplay;
