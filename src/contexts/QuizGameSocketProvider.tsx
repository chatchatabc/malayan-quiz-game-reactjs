import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { ObjectInterface } from "../helpers/commonInterface";

interface Props {
  children: React.ReactNode;
}
const socket = io();
export const QuizGameSocketContext = React.createContext<ObjectInterface>({});

function QuizGameSocketProvider({ children }: Props) {
  const default_data: ObjectInterface = {
    stateNo: 0,
    state: "NONE",
    countdown: 10,
  };
  const [data, setData] = useState<ObjectInterface>(default_data);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState<string | null>(null);
  const value = { data, setData };

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
  };

  return (
    <QuizGameSocketContext.Provider value={value}>
      {/* <p>Connected: {"" + isConnected}</p>
      <p>Last pong: {lastPong || "-"}</p>
      <button onClick={sendPing}>Send ping</button> */}
      {children}
    </QuizGameSocketContext.Provider>
  );
}

export default QuizGameSocketProvider;
