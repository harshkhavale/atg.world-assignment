import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { posts } from "../constant";
import Post from "./Post";
import Group from "./Group";

const Feed = ({handleUser,user}) => {
  return (
    <div className="feed md:px-36 flex flex-col gap-8 py-10">
      <div className=" hidden md:visible header md:flex items-center justify-between relative py-4">
        <ul className="font-bold text-gray-500 flex items-center gap-6">
          <li className="text-black">All Posts(32)</li>
          <li>Article</li>
          <li>Event</li>
          <li>Education</li>
          <li>Job</li>
        </ul>
        <div className="controls gap-4 flex items-center">
          <button className="write font-bold bg-gray-200 flex items-center gap-2 p-2">
            Write a Post <MdArrowDropDown />
          </button>
          <button className="leave text-gray-600 border rounded-sm border-gray-400 flex items-center gap-2 p-2">
            Leave Group
            <MdExitToApp />
          </button>
          <button className="join bg-blue-500 text-white font-bold flex items-center gap-2 p-2">
            Join Group
            <HiUsers />
          </button>
        </div>
        <div className="hr absolute  bottom-0 p-[1px] w-full bg-gray-300"><div className="p-[1px] absolute top-0 start-0 w-24 bg-black"></div></div>

      </div>
      <div className=" visible md:hidden -mt-6 mobileheader flex justify-between px-4 items-center">
        <p className=" font-bold text-xl">Posts{"(368)"}</p>
        <p className="bg-gray-100 p-2 font-semibold flex items-center gap-2">Filter:All <MdArrowDropDown/></p>
      </div>

      <div className="main md:grid grid-cols-5 gap-10">
        <div className="posts col-span-3 flex flex-col gap-4">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <div className="userhandles col-span-2">
          <Group user={user}/>
        </div>
      </div>
    </div>
  );
};

export default Feed;
