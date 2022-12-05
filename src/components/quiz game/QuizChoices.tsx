import React, { useContext, useState } from "react";
import { QuizGameSocketContext } from "../../contexts/QuizGameSocketProvider";
import MotionDiv from "../widgets/MotionDiv";

function QuizChoices() {
  const { data } = useContext(QuizGameSocketContext);
  const { countdown, attrs = {} } = data;
  const { choices = {}, answerStats = {}, answerUUID = "" } = attrs;
  const [userAnswer, setUserAnswer] = useState(0);
  const [closeSelection, setCloseSelection] = useState(false);

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCloseSelection(true);
    setUserAnswer(parseInt(e.currentTarget.value));
  };

  return (
    <MotionDiv className="p-5 space-y-5">
      {Object.entries(choices).map(([key, value], index: number) => {
        // Normal
        let status = "bg-gray-200";
        let background = "bg-gray-200";
        if (data.state === "START_QUESTION") {
          // Disabled
          if (countdown && !closeSelection) status = "border";
          // User Answer
          if (index + 1 === userAnswer) {
            status = "bg-blue-500 text-white";
          }
        }
        // Showing of Answer
        else {
          status = "border-gray-500 border";
          // Correct Answer
          if (key === answerUUID) {
            status = "bg-green-100 border-green-500 border";
            background = "bg-green-200";
          }
          // Wrong Answer
          if (index + 1 === userAnswer && key !== answerUUID) {
            status = "bg-red-100 border-red-500 border";
            background = "bg-red-200";
          }
        }

        return (
          <div key={key} className="relative">
            <button
              disabled={
                !countdown || closeSelection || data.state !== "START_QUESTION"
              }
              key={index + 1}
              value={index + 1}
              onClick={handleButton}
              className={`relative block w-full rounded-md py-3 px-6 font-bold text-left border-gray-400 ${status}`}
            >
              <p className="flex justify-between">
                {value as string}{" "}
                {data.state === "SHOW_ANSWER" && (
                  <span>{answerStats[key]}</span>
                )}
              </p>
            </button>
            {data.state === "SHOW_ANSWER" && (
              <div
                className={`absolute inset-0 ${background} rounded-md mix-blend-multiply`}
                style={{ width: `50%` }}
              ></div>
            )}
          </div>
        );
      })}
    </MotionDiv>
  );
}

export default QuizChoices;
