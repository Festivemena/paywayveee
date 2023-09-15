import Image from 'next/image'
import { HeroPic, OneTap, Ui, Logo } from "../../public";
import { DiApple } from "react-icons/di";
import { BiLogoPlayStore } from 'react-icons/bi'

function CTA() {
  return (
    <div className="pt-40 ml-24 w-2/3">
      <div className="text-black text-[60px] text-center font-bold">
        Do All With Just One Tap.
      </div>
      <div className="text-black text-[20px] px-12 ml-7 pt-5 w-[481px]">
        The card that simplifies payments, tracks attendance, and powers your
        ride with PayWayve platform.
      </div>
      <div className="ml-6 mt-12">
        <div className="w-2/3 pl-6">
          <div className="text-white bg-[#9A11FF] cursor-pointer w-full text-[20px] h-[62px] ml-6 shadow-2xl font-bold text-center py-4 rounded-md">
            Join PayWayve
          </div>
        </div>
        <div className="flex mt-5">
          <div className="text-white pt-1 flex cursor-pointer bg-black w-1/3 h-[62px] ml-6 shadow-2xl rounded-md">
            <div className="flex">
              <DiApple className="w-[48px] h-[48px]" />
            </div>
            <div className="flex-1">
              <div className="text-[12px]">Download on the</div>
              <div className="text-[14px] font-bold">Apple Store</div>
            </div>
          </div>
          <div className="text-white pt-1 cursor-pointer flex bg-black w-1/3 h-[62px] ml-6 shadow-2xl rounded-md">
            <div className="flex">
              <BiLogoPlayStore className="w-[48px] h-[48px]" />
            </div>
            <div className="flex-1">
              <div className="text-[12px] pt-2">Get it on</div>
              <div className="text-[14px] font-bold">
                <a className="text-[#0086F9]">G</a>
                <a className="text-[#FF4131]">o</a>
                <a className="text-[#FEBD00]">o</a>
                <a className="text-[#0086F9]">g</a>
                <a className="text-[#00AA4A]">l</a>
                <a className="text-[#FF4131]">e</a>{" "}
                <a className="text-white">Play</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="w-full flex">
      <div>
        <CTA />
      </div>
      <div className='-mr-24'>
        <Image alt='Hero' src={HeroPic} />
      </div>
    </div>
  );
}