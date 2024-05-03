import React, { useState } from "react";
import SignUp from "../SignUp";
import { authbg } from "../../images";
import { IoCloseCircleSharp } from "react-icons/io5";
import SignIn from "../SignIn";

const AuthModel = ({ handler,userhandler }) => {
  const [account, setAccount] = useState(false);
  const changeAuth = ()=>{
    setAccount(!account);
  }

  return (
    <div className="fixed z-50 inset-0  flex justify-center items-center bg-black bg-opacity-50">
      <div className="modal  bg-white absolute md:inset-0 bottom-0 md:m-20 md:mx-96 shadow-xl rounded-xl">
        <div
          className="absolute z-50 md:-top-12 top-4  text-3xl md:text-white text-gray-600  right-4 md:-right-4 cursor-pointer "
          onClick={handler}
        >
          <IoCloseCircleSharp />
        </div>
        <div className=" hidden md:visible header md:flex justify-center items-center text-sm font-semibold p-4 bg-green-100 text-green-600 rounded-t-3xl">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>
        <div className="main md:grid grid-cols-2 flex justify-center p-8 gap-4">
          <div className="component col-span-1">
            {account ? <SignIn changeAuth={changeAuth} userhandler={userhandler} close={handler} /> : <SignUp changeAuth={changeAuth} userhandler={userhandler} close={handler} />}
          </div>
          <div className="hidden md:visible md:flex col-span-1 flex-col gap-1">
            <div className=" flex items-center justify-end">
              {!account ? (
                <div className=" flex items-center">
                  {" "}
                  <p className="text-sm ">Already have an account?</p>
                  <p className="text-blue-500 font-bold px-2 cursor-pointer" onClick={changeAuth}>Sign In</p>
                </div>
              ) : (
                <div className=" flex items-center">
                  {" "}
                  <p className="text-sm">Don’t have an account yet?</p>
                  <p className="text-blue-500 font-bold px-2 cursor-pointer" onClick={changeAuth}>
                    Create new for free!
                  </p>
                </div>
              )}
            </div>

            <img src={authbg} alt="" />
            <p className="text-xs text-center">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModel;
