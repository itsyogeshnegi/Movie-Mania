import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LogIn = () => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "url(https://wallpapers.com/images/featured/ultra-hd-wazf67lzyh5q7k32.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="flex justify-center items-center flex-col bg-[rgb(0,0,0,0.75)] p-[70px] rounded-md w-[37%] min-w-[300px]">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl text-white font-bold">Watch</h1>
          <img src="/icons/tv.png" className="h-10 px-2" />
          <h1 className="text-2xl text-white font-bold">It</h1>
        </div>
        <input
          type="email"
          placeholder="Email"
          required
          className="my-2  text-center border-2 text-white outline-none  py-[7px] px-10  bg-transparent rounded mt-10 -mb-5"
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="my-2  text-center border-2 text-white outline-none  py-[7px] px-10 bg-transparent rounded mt-10 -mb-5"
        />
        <button className="bg-blue-500 mt-10 py-[7px] px-[20px] rounded text-md font-black text-white hover:bg-blue-700">
          Log In
        </button>
        <p className="text-white font-bold py-2">
          Lorem ipsum dolor sit amet{" "}
          <spn className="font-normal cursor-pointer">Sign-Up.</spn>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default LogIn;
