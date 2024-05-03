import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignIn = ({userhandler,close,changeAuth}) => {
    const authUser = ()=>{
        userhandler();
        close();
    }
  return (
    <div className="signin flex flex-col gap-4">
      <p className=" font-bold text-xl md:text-2xl">Welcome Back!</p>
      <div>
        
        <div className="email">
          <input
            type="email"
            className=" border w-[83vw] md:w-full font-bold outline-none p-3"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="password">
          <input
            type="password"
            className=" border w-full font-bold outline-none p-3"
            placeholder="Password"
            name="password"
          />
        </div>
        
      </div>
<div className=" flex items-center gap-2">
<button className=" bg-blue-500 p-2 w-full  rounded-full text-white text-center font-bold" onClick={authUser}>
        Sign In
      </button>
      <p className=" md:hidden text-gray-600 font-normal underline underline-offset-4 text-nowrap cursor-pointer" onClick={changeAuth}>or, Create Account</p>
</div>

      <div className="other flex flex-col gap-2">
        <button className=" border text-center font-semibold flex items-center justify-center gap-2 p-2">
          <FcGoogle /> Sign in with Facebook
        </button>
        <button className="border text-center font-semibold flex items-center justify-center gap-2 p-2">
          <FaFacebook className=" text-blue-500" /> Sign in with Google
        </button>
        <div>
            <p className="font-bold text-center my-2 cursor-pointer">Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
