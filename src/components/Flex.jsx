import React from "react";
import { flex } from "../images";
import { FaArrowLeft } from "react-icons/fa";

const Flex = () => {
  return (
   <div className="banner relative md:h-[65vh] h-[40vh]">
    <div className=" visible md:hidden absolute top-2 left-4 text-xl z-40 text-white">
      <FaArrowLeft  />
    </div>
    <div className=" visible md:hidden absolute top-2 right-4 z-40 px-2 py-1 text-white border-2 rounded-lg">
      Join Group
    </div>
    <img src={flex} alt="banner-img"  className="object-cover h-full w-full"/>
    <div className="info absolute top-0  text-white bg-black/40 h-full w-full">
      
      <div className="absolute md:bottom-20 md:start-20 bottom-8 start-6 ">
      <p className=" font-bold text-2xl md:text-3xl">Computer Engineering</p>
      <p>142,765 Computer Engineers follow this</p>
        </div>
    </div>
   </div>
  );
};

export default Flex;
