import React from "react";
import Image from 'next/image'
import { HeroPic, OneTap, Ui, Logo, Subtract } from "../../public";

export default function Invite() {
    return (
      <div className="w-full">
     <div className="h-[550px] opacity-40 flex bg-[#9A11FF] w-full">
     </div>
     <div className="flex -mt-[510px] justify-center absolute">
     <div className="flex-1 items-center justify-center text-center w-1/2">
     <Image alt="HeroPic" className="pt-36 ml-16" src={Subtract} />
     <div className="text-[38px] -mt-20 text-center px-16 w-full font-semibold">
     The Financial Solution you have been wishing for.
   </div>
   <div className='text-white bg-[#9A11FF] w-1/2 h-[62px] cursor-pointer mx-48 mt-12 text-[20px] shadow-2xl font-bold text-center py-4 rounded-md'>
          Join PayWayve
        </div>
   </div>
   <div className="w-1/2">
     <Image alt="UI" src={Ui} />
   </div>
     </div>
     </div>
    );
  }