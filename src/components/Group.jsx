import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa6";
import { groups } from '../constant';

const Group = ({user}) => {
  return (
    <div className="group p-10">
      <div className="location pb-4 flex justify-between items-center relative">
        <div className=' flex items-center gap-2'>
        <MdOutlineLocationOn />
        <p className=' font-bold '>Noida, India</p>
        </div>

        <div className=' text-2xl'>
          <MdEdit />

        </div>
        <div className="hr absolute bottom-0 p-[1px] w-full bg-gray-300"></div>
        



      </div>

      <div className="info text-sm flex gap-2 py-10 items-center text-gray-500">
        <MdInfoOutline className=' text-3xl'/>
      Your location will help us serve better and extend a personalised experience.
      </div>
      {
        user && (
          <div className="reccomend">
            <p className='flex items-center gap-4 capitalize font-bold text-xl'><FaRegThumbsUp/>RECOMMENDED GROUPS</p>
            <div className=' flex gap-4 flex-col my-8'>
              {
                groups.map((group, i) =>(
                  <div className=' flex justify-between items-center'>
                    

                  <div className=' flex items-center gap-4'>
                  <img src={group.profile} alt="group-img" className="h-10 w-10 rounded-full"/>
                    <p className="font-bold">{group.title}</p>
                    </div>
<p className='bg-gray-200 rounded-full font-semibold p-1 px-4'>follow</p>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Group