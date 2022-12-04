import React, { useContext, useState } from "react";
import { QuizGameSocketContext } from "../../contexts/QuizGameSocketProvider";

function QuizChoices() {
  const { data } = useContext(QuizGameSocketContext);
  const { countdown, attrs = {} } = data;
  const { choices = {} } = attrs;
  const [userAnswer, setUserAnswer] = useState(0);
  const [closeSelection, setCloseSelection] = useState(false);
  console.log(data);

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCloseSelection(true);
    setUserAnswer(parseInt(e.currentTarget.value));
  };

  return (
    <div className="p-5 space-y-5">
      {Object.entries(choices).map((x, index) => {
        // Normal
        let status = "bg-gray-200";
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
          // Correct Answer
          if (index + 1 === 1) {
            status = "bg-green-500 text-white";
          }
          // Wrong Answer
          if (index + 1 === userAnswer && userAnswer !== 1) {
            status = "bg-red-500 text-white";
          }
        }

        return (
          <button
            disabled={!countdown || closeSelection}
            key={index + 1}
            value={index + 1}
            onClick={handleButton}
            className={`block w-full rounded-md py-3 px-6 font-bold text-left border-gray-400 ${status}`}
          >
            Button Text
          </button>
        );
      })}
    </div>
  );
}

export default QuizChoices;
