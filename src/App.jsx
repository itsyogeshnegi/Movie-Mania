import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./Pages/LogInPage/LogIn";
import Home from "./Pages/HomPage/Home";
const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <LogIn /> },
    { path: "/Home", element: <Home /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
