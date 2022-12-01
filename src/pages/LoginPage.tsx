import axios from "axios";
import React, { FormEvent } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { axiosPost } from "../helpers/commonAxios";

const handleSubmit = async (e: any, navigate: NavigateFunction) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const res = await axiosPost({ api: "/api/", body: form_data });
  for (let pair of form_data.entries()) {
    localStorage.setItem(pair[0], pair[1].toString());
  }
  navigate("/");
};

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto flex flex-col justify-center h-screen p-5">
      <section className="text-center">
        <img
          className="w-1/2 aspect-square mx-auto"
          src="/images/logo.png"
          alt="logo"
        />
        <h2 className="text-3xl">ChatChatABC Quiz</h2>
        <h5>Join and have a chance to win!</h5>
      </section>
      <section>
        <form
          className="p-5 space-y-5"
          onSubmit={(e: FormEvent) => handleSubmit(e, navigate)}
        >
          <label>
            Student ID Number:{" "}
            <input
              className="w-full border-2 my-1 rounded-lg p-1"
              name="student_id"
              type="text"
            />
          </label>
          <label>
            Full Name:{" "}
            <input
              name="full_name"
              className="w-full border-2 my-1 rounded-lg p-1"
              type="text"
            />
          </label>

          <button
            className="w-full p-2 rounded-lg bg-blue-500 text-white font-bold"
            type="submit"
          >
            Join Game
          </button>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
