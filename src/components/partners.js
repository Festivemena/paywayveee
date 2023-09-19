import React from "react";
import Image from "next/image";
import { PayStack, UnibenMfb, WemaBank } from "../../public";

export default function Partners() {
  return (
    <div className="flex-1 bg-white pb-36 items-center justify-between w-full">
      <div className="text-[38px] pb-10 justify-center text-black flex text-center font-bold">Our Partners</div>
      <div className="flex justify-center space-x-20">
        <Image className="h-36 w-40" alt="WemaBank" src={WemaBank} />
        <Image className="h-36 w-40" alt="UnibenMFB" src={UnibenMfb} />
        <Image className="h-36 w-40" alt="Paystack" src={PayStack} />
      </div>
    </div>
  );
}