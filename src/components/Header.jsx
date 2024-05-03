import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { logo, user_4 } from "../images";
import AuthModel from "./mod/AuthModel";
import { MdOutlineModeEdit } from "react-icons/md";

const Header = ({ handleUser, user }) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div>

    <div className="md:visible hidden header font-semibold sticky top-0 z-40 bg-white md:flex justify-between p-4">
      <div className="logo flex items-center font-medium text-3xl justify-center">
        <span className="text-[#27A365]">ATG</span>.
        <span
          className="flex items-center text-[#5C5D5D]
"
        >
          W <img src={logo} alt="logo" className=" h-6 w-6" /> RLD
        </span>
      </div>
      <div className="search md:w-[20rem] flex md:text-sm gap-2 p-2 items-center bg-gray-200  rounded-3xl">
        <MdOutlineSearch className=" font-bold text-xl text-gray-500" />
        <input
          type="text"
          className=" font-medium bg-transparent w-full outline-none"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>
      {!user ? (
        <div className="link flex items-center text-nowrap">
          create account.{" "}
          <p className=" text-blue-500 cursor-pointer text-nowrap" onClick={handleModal}>
            It's free!
          </p>
          <MdArrowDropDown />
        </div>
      ) : (
        <div className=" flex items-center justify-between gap-4">
          <div className=" flex items-center gap-2">
            <img
              className="h-8 w-8 object-cover rounded-full"
              src={user_4}
              alt="profile-pic"
            />
            <p className=" font-semibold ">Siddharth Goyal</p>
          </div>
          <MdArrowDropDown />
        </div>
      )}
    </div>

    <div className=" md:hidden text-white text-3xl fixed bottom-4 cursor-pointer z-50 right-4 write bg-gradient-to-r from-[#FF5C5C] to-[#F0568A] rounded-full p-2" onClick={handleModal}>
    <MdOutlineModeEdit />

    </div>
    {modal && <AuthModel handler={handleModal} userhandler={handleUser} />}

    </div>

  );
};

export default Header;
