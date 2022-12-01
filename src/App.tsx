import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuizGameLayout from "./layouts/QuizGameLayout";
import LoginPage from "./pages/LoginPage";
import QuizGame from "./pages/QuizGame";

const router = createBrowserRouter([
  {
    path: "/",
    element: <QuizGameLayout />,
    children: [
      {
        path: "/",
        element: <QuizGame />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <main className="overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
