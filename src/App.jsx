import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./Pages/LogInPage/LogIn";
const App = () => {
  const router = createBrowserRouter([{ path: "/", element: <LogIn /> }]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
