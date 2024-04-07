import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../Utils/FireBase";
const LogIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const logIn = async () => {
    try {
      const { email, password } = data;

      // Check if email or password is empty
      if (email === "" || password === "") {
        toast.error("Both email and password must be provided.");
      } else {
        const auth = getAuth();

        // Sign in with email and password
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        // If sign-in is successful
        const user = userCredential.user;
        toast.success(`Hello, ${user.email}!`);

        // Optionally, you could redirect the user to another page upon successful login.
        // Example: history.push('/dashboard');
      }
    } catch (error) {
      // Handle errors
      console.error("Login error:", error);
      toast.error("Invalid email or password.");
    }
  };

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
          value={data.email}
          onChange={e => setData({ ...data, email: e.target.value })}
          required
          className="my-2  text-center border-2 text-white outline-none  py-[7px] px-10  bg-transparent rounded mt-10 -mb-5"
        />
        <input
          type="password"
          required
          value={data.password}
          onChange={e => setData({ ...data, password: e.target.value })}
          placeholder="Password"
          className="my-2  text-center border-2 text-white outline-none  py-[7px] px-10 bg-transparent rounded mt-10 -mb-5"
        />
        <button
          onClick={logIn}
          className="bg-blue-500 mt-10 py-[7px] px-[20px] rounded text-md font-black text-white hover:bg-blue-700">
          Log In
        </button>
        <p className="text-white font-bold py-2">
          Lorem ipsum dolor sit amet{" "}
          <span className="font-normal cursor-pointer text-purple-600">
            Sign-Up.
          </span>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default LogIn;
