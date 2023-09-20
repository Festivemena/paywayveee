import React from "react";
import Link from "next/link";
import Image from "next/image"
import {BiMenu} from "react-icons/bi"
import { HeroPic, OneTap, Ui, Logo } from "../../public";

function Menu () {
  return (
    <div className="flex w-full text-center text-[16px] space-x-12 justify-center text-[#000212] px-24">
      <Link href="/waitlist">
      <div className="text-[16px]  hover:bg-purple-950 hover:text-white pt-1 rounded-md h-8 w-24  cursor-pointer mr-3">
        Personal
      </div>
      </Link>
      <Link href="/waitlist">
      <div className="text-[16px] hover:bg-purple-950 hover:text-white pt-1 rounded-md h-8 w-24 cursor-pointer mr-3">
        Business
      </div>
      </Link>
      <Link href="/waitlist">
      <div className="text-[16px] hover:bg-purple-950 hover:text-white pt-1 rounded-md h-8 w-24 cursor-pointer mr-3">
        About
      </div>
      </Link>
      <Link href="/waitlist">
      <div className="text-[16px] hover:bg-purple-950 hover:text-white pt-1 rounded-md h-8 w-24 cursor-pointer mr-3">
        Help
      </div>
      </Link>
    </div>
  );
}

export default function Header() {
  return (
   <div className="flex px-1 py-1.5 lg:px-12 items-right bg-white lg:items-center w-full lg:justify-between lg:text-center">
    <div className="flex cursor-pointer">
        <Image alt="Logo" src={Logo} />
    </div>
    <div className="hidden lg:flex">
    <Menu />
   <div className="flex text-center px-2 cursor-pointer mr-10">
     SignIn
   </div>
   <div className="w-[230px] cursor-pointer text-center text-white text-[16px] shadow-xl py-2 px-3 font-bold rounded-[10px] bg-[#9A11FF] h-[37px]">
    Join PayWayve
   </div>
    </div>
    <div>
      <BiMenu />
    </div>
   <div>

   </div>
 </div>
  );
}