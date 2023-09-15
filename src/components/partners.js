import React from "react";
import Image from "next/image";
import { PayStack, UnibenMfb, WemaBank } from "../../public";

export default function Partners() {
  return (
   <div className="flex-1 bg-white pb-36 justify-between w-full">
    <div className="text-[38px] text-center font-bold">Our Partners</div>
    <div className="flex justify-center space-x-20">
    <Image alt="WemaBank" src={WemaBank} />
    <Image alt="UnibenMFB" src={UnibenMfb} />
    <Image alt="Paystack" src={PayStack} />
    </div>
   </div>
  );
}