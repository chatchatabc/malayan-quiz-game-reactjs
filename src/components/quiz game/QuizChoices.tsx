import React, { useContext, useState } from "react";
import { QuizGameSocketContext } from "../../contexts/QuizGameSocketProvider";

function QuizChoices() {
  const { data } = useContext(QuizGameSocketContext);
  const { countdown } = data;
  const [choices, setChoices] = useState(0);
  return (
    <div className="p-5 space-y-5">
      {[...Array(4)].map((x, index) => (
        <button
          disabled={!countdown}
          key={index + 1}
          onClick={() => setChoices(index + 1)}
          className={`block w-full rounded-md py-3 px-6 font-bold text-left border-gray-400 ${
            choices && choices === index + 1
              ? "bg-blue-700 text-white"
              : countdown
              ? "border"
              : "border bg-gray-400"
          }`}
        >
          Button Text
        </button>
      ))}
    </div>
  );
}

export default QuizChoices;
