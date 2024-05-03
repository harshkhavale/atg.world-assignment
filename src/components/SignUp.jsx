import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignUp = ({userhandler,close,changeAuth}) => {
    const authUser = ()=>{
        userhandler();
        close();
    }
  return (
    <div className="signup flex flex-col gap-4">
      <p className=" font-bold text-xl md:text-2xl">Create Account</p>
      <div>
        <div className="name flex items-center w-full">
          <input
            type="text"
            className=" border font-bold w-6/12 outline-none p-3"
            placeholder="First Name"
            name="first-name"
          />
          <input
            type="text"
            className=" border font-bold w-6/12 outline-none p-3"
            placeholder="Last Name"
            name="last-name"
          />
        </div>
        <div className="email">
          <input
            type="email"
            className=" border w-full font-bold outline-none p-3"
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
        <div className="cpassword">
          <input
            type="password"
            className="w-full border font-bold outline-none p-3"
            placeholder="Confirm Password"
            name="cpassword"
          />
        </div>
      </div>

<div className=" flex items-center gap-2">
<button className=" bg-blue-500 p-2 w-full rounded-full cursor-pointer text-white text-center font-bold" onClick={authUser}>
        Create Account
      </button>      <p className=" md:hidden text-gray-600 font-normal underline underline-offset-4 cursor-pointer text-nowrap" onClick={changeAuth}>or, Create Account</p>

      
</div>
     <div className="other flex flex-col gap-2">
        <button className=" border text-center font-semibold flex items-center justify-center gap-2 p-2">
          <FcGoogle /> Sign up with Facebook
        </button>
        <button className="border text-center font-semibold flex items-center justify-center gap-2 p-2">
          <FaFacebook className=" text-blue-500" /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
