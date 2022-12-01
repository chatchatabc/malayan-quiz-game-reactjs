import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import QuizGameSocketProvider from "../contexts/QuizGameSocketProvider";

function QuizGameLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const full_name = localStorage.getItem("full_name")?.trim();
    const student_id = localStorage.getItem("student_id")?.trim();
    if (!full_name || !student_id) {
      navigate("/login");
    }
    if (full_name === "" || student_id === "") {
      navigate("/login");
    }
  }, []);
  return (
    <div className="bg-neutral-50 h-screen flex flex-col">
      <section className="bg-blue-700 p-2">
        <div className="mx-auto max-w-lg w-full flex justify-between items-center">
          <img src="/images/logo.png" className="w-12" />
          <p className="font-bold text-white">Student ID</p>
        </div>
      </section>
      <QuizGameSocketProvider>
        <Outlet />
      </QuizGameSocketProvider>
    </div>
  );
}

export default QuizGameLayout;
