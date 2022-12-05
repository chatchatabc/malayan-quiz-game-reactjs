import React, { useContext } from "react";
import { QuizGameSocketContext } from "../../contexts/QuizGameSocketProvider";
import { ObjectInterface } from "../../helpers/commonInterface";

const data_state: ObjectInterface = {
  "0": {
    state: "NONE",
  },
  "1": {
    state: "QUEUEING",
  },
  "2": {
    state: "STARTED",
  },
  "3": {
    state: "GET_READY",
  },
  "4": {
    state: "START_QUESTION",
    attrs: {
      uuid: "990065b9-eb7a-4713-8df4-a454e95ae76b",
      question: "What is the chemical symbol for gold?",
      choices: {
        "39ee328d-4b99-4580-92b5-edf4cf014afd": "Au",
        "c9837ff5-ecc6-46b3-80d3-556800b1b610": "Ag",
        "3047afe7-f16b-4ecf-a51b-293cc4c24fb6": "Al",
        "f71f9d30-6d79-4382-bcb0-0bf26c7bb465": "As",
      },
      timer: 20,
      startTimestamp: 1669960178,
      endTimestamp: 1669960198,
    },
  },
  "5": {
    state: "END_QUESTION",
  },
  "6": {
    state: "SHOW_ANSWER",
    attrs: {
      questionUUID: "8877264e-f25c-4bc6-8609-1d60006130cb",
      answerStats: {
        "39ee328d-4b99-4580-92b5-edf4cf014afd": 0,
        "c9837ff5-ecc6-46b3-80d3-556800b1b610": 0,
        "3047afe7-f16b-4ecf-a51b-293cc4c24fb6": 0,
        "f71f9d30-6d79-4382-bcb0-0bf26c7bb465": 0,
      },
      answerUUID: "39ee328d-4b99-4580-92b5-edf4cf014afd",
      isCorrect: false,
    },
  },
  "7": {
    state: "SHOW_WINNERS",
    attrs: {
      winners: ["Mike Arnado"],
      isWinner: false,
    },
  },
};

const changeState = (stateNo: number, setData: any) => {
  setData((prev: ObjectInterface) => {
    const { state, attrs } = data_state[stateNo.toString()];
    return { ...prev, state, attrs: { ...prev.attrs, ...attrs }, stateNo };
  });
};

function QuizState() {
  const { data, setData } = useContext(QuizGameSocketContext);
  return (
    <section className="flex justify-around py-10 border-4">
      <button onClick={() => changeState(data.stateNo - 1, setData)}>
        Back
      </button>
      {data.state} {data.stateNo}
      <button onClick={() => changeState(data.stateNo + 1, setData)}>
        Next
      </button>
    </section>
  );
}

export default QuizState;
