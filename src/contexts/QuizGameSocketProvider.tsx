import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { ObjectInterface } from "../helpers/commonInterface";

export const QuizGameSocketContext = React.createContext<ObjectInterface>({});
interface Props {
  children: React.ReactNode;
}
const sock = new SockJS("https://quiz.chatchatabc.com/backend");

function QuizGameSocketProvider({ children }: Props) {
  const default_data: ObjectInterface = {
    stateNo: 0,
    state: "NONE",
    countdown: 10,
  };
  const [data, setData] = useState<ObjectInterface>(default_data);

  useEffect(() => {
    sock.onopen = function () {
      console.log("open");
      sock.send("test");
    };

    sock.onmessage = function (e) {
      console.log("message", e.data);
      sock.close();
    };

    sock.onclose = function () {
      console.log("close");
    };

    return () => {
      sock.close();
    };
  }, []);

  const sendMessage = (message: string) => {
    sock.send(message);
  };

  const value = { data, setData, sendMessage };

  return (
    <QuizGameSocketContext.Provider value={value}>
      {children}
    </QuizGameSocketContext.Provider>
  );
}

export default QuizGameSocketProvider;
