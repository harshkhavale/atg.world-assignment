import React, { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import OptionModal from "./mod/OptionModal";

const Post = ({ post }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="post overflow-hidden border shadow-md rounded-md">
      {post.thumbnail && (
        <img
          src={post.thumbnail}
          className="w-full md:h-60 h-40 object-cover"
          alt="post-img"
        />
      )}

      <div className="content p-4 flex flex-col gap-4">
        <p className="font-bold md:text-xl">
          {post.category === "Article" && "✍️ Article"}
          {post.category === "Education" && "🔬️ Education"}
          {post.category === "Meetup" && "🗓️ Meetup"}
          {post.category === "Job" && "💼️ Job"}
        </p>

        <div className="devision relative grid grid-cols-4">
          <div className=" col-span-3">
            <p className=" font-bold md:text-2xl">{post.title}</p>
          </div>

          <div className=" absolute right-0 col-span-1">
            <SlOptions
              className=" cursor-pointer text-3xl hover:bg-gray-400 p-2 rounded-md"
              onClick={handleShow}
            />
            {show && (
              <div className=" absolute right-2 top-8">
                <OptionModal />
              </div>
            )}
          </div>
        </div>
        <p className=" text-gray-500 md:text-xl truncate">{post.desc}</p>
        {post.category === "Meetup" || post.category === "Job" ? (
          <div className=" flex flex-col gap-4">
            <div className=" flex font-bold items-center gap-10">
              {post.category === "Meetup" ? (
                <div className="time flex items-center gap-2">
                  <SlCalender />
                  {post.date}
                </div>
              ) : (
                <div className="time flex items-center md:gap-2">
                  <MdOutlineWorkOutline />
                  <p className=" truncate"> {post.role}</p>
                </div>
              )}
              <div className="location flex items-center gap-2">
                {" "}
                <MdOutlineLocationOn />
                <p className=" text-nowrap truncate"> {post.location}</p>
              </div>
            </div>

            <div
              className={`p-2 w-full flex border-2 rounded-2xl justify-center items-center font-bold ${
                post.category === "Meetup"
                  ? "text-orange-600"
                  : "text-green-500"
              }`}
            >
              {post.category === "Meetup"
                ? "Visit Website"
                : "Apply on Timesjobs"}
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="profile md:p-4 p-1 flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <img
              className="h-10 w-10 object-cover rounded-full"
              src={post.user.profile}
              alt="profile-pic"
            />
            <div>
              <p className=" font-bold ">{post.user.name}</p>
              <p className=" md:hidden flex gap-1 items-center text-gray-500 font-bold">
                <MdOutlineRemoveRedEye />
                1.4k views
              </p>
            </div>
          </div>
          <div className="other flex items-center justify-items-end gap-8">
            <p className=" hidden md:visible md:flex gap-1 items-center text-gray-500 font-bold">
              <MdOutlineRemoveRedEye />
              1.4k views
            </p>
            <p className="bg-gray-200 flex items-center gap-1 p-2">
              <IoMdShare />
              <p className="md:hidden">Share</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
