import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { HeroPic, OneTap, Ui, Logo, Subtract } from "../../public";

export default function Invite() {
    return (
      <div className="w-full">
     <div className="lg:h-[550px] h-[700px] -pb-12 opacity-40 -mt-[300px] flex bg-[#9A11FF] w-full">
     </div>
     <div className="lg:flex sm:flex-1 lg:-mt-[510px] -mt-[740px] justify-center absolute">
     <div className="flex-1 items-center justify-center text-center w-full lg:w-1/2">
     <Image alt="HeroPic" className="lg:pt-36 block w-12 lg:hidden pt-24 ml-10 lg:ml-16" src={Subtract} />
     <Image alt="HeroPic" className="lg:pt-36 hidden lg:block  pt-24 ml-10 lg:ml-16" src={Subtract} />
     <div className="text-[24px] lg:text-[38px] -mt-8 -pr-10 text-center px-8 lg:px-16 w-full font-semibold">
     The Financial Solution you have been wishing for.
   </div>
   <Link href="/waitlist">
     <div className='text-white bg-[#9A11FF] w-1/2 h-[62px] cursor-pointer lg:mx-48 ml-32 mt-12 text-[20px] shadow-2xl font-bold text-center py-4 rounded-md'>
          Join PayWayve
     </div>
   </Link>
   </div>
   <div className="lg:w-1/2 w-full">
     <Image alt="UI" src={Ui} />
   </div>
     </div>
     </div>
    );
  }
