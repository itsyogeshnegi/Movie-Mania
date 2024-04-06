import React from "react";

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
        <div>
            <img src="/icons/movie.png"/>
        </div>
        <input
          type="email"
          placeholder="Email"
          required
          className="my-2  text-center border-2 text-white outline-none  py-[7px] px-[20px]  bg-transparent rounded mt-10 -mb-5"
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="my-2  text-center border-2 text-white outline-none  py-[7px] px-[20px]  bg-transparent rounded mt-10 -mb-5"
        />
        <button className="bg-blue-500 mt-10 py-[7px] px-[20px] rounded text-md font-black text-white hover:bg-blue-700">
          Log In
        </button>
      </div>
    </div>
  );
};

export default LogIn;
