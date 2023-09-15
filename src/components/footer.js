import Image from "next/image";
import { Logo } from "../../public";
import { DiApple } from "react-icons/di";
import { BiLogoPlayStore } from 'react-icons/bi'

export default function Footer() {
    return (
     <div className="bg-[#000212] border-t-1 border-white flex-1 w-full h-96">
      <div className="flex w-full text-center px-32 pt-12 justify-between">
      <div className="">
        <Image alt="logo" src={Logo} />
      </div>
      <div className="flex-1 text-white justify-center items-center">
        <div className="text-[20px] font-bold">Personal</div>
        <div className="text-[16px] font-light">Discover</div>
        <div className="text-[16px] font-light">Transfer and Spend</div>
        <div className="text-[16px] font-light">Piggy Save</div>
        <div className="text-[16px] font-light">Buy Airtime</div>
        <div className="text-[16px] font-light">Buy Data</div>
        <div className="text-[16px] font-light">Get Card</div>
      </div>
      <div className="flex-1 text-white justify-center items-center">
      <div className="text-[20px] font-bold">Business</div>
        <div className="text-[16px] font-light">Discover</div>
        <div className="text-[16px] font-light">Business Integration</div>
        <div className="text-[16px] font-light">One Tap Device</div>
        <div className="text-[16px] font-light">Inventory</div>
      </div>
      <div className="flex-1 text-white justify-center items-center">
      <div className="text-[20px] font-bold">Company</div>
        <div className="text-[16px] font-light">Blog</div>
        <div className="text-[16px] font-light">Press & Recognition</div>
        <div className="text-[16px] font-light">Join Our Team</div>
        <div className="text-[16px] font-light">About Us</div>
      </div>
      <div className="flex-1 text-white justify-center items-center">
      <div className="text-[20px] font-bold">Help</div>
        <div className="text-[16px] font-light">FAQ</div>
        <div className="text-[16px] font-light">Speak With Us</div>
        <div className="text-[16px] font-light">Security</div>
      </div>
      </div>
      <div className="flex">
      <div className='w-1/3 pl-6'>
        <div className='text-white bg-[#9A11FF] cursor-pointer w-full text-[20px] h-[62px] ml-6 shadow-2xl font-bold text-center py-4 rounded-md'>
          Join PayWayve
        </div>
        </div>
        <div className='flex mt-5'>
        <div className='text-white pt-1 flex cursor-pointer bg-black w-[152px] h-[62px] ml-6 shadow-2xl rounded-md'>
        <div className='flex'>
          <DiApple className='w-[48px] h-[48px]' />
        </div>
        <div className='flex-1'>
          <div className='text-[12px]'>Download on the</div>
          <div className='text-[14px] font-bold'>Apple Store</div>
        </div>
      </div>
      <div className='text-white pt-1 cursor-pointer flex bg-black w-[152px] h-[62px] ml-6 shadow-2xl rounded-md'>
        <div className='flex'>
          <BiLogoPlayStore className='w-[48px] h-[48px]' />
        </div>
        <div className='flex-1'>
          <div className='text-[12px] pt-2'>Get it on</div>
          <div className='text-[14px] font-bold'><a className='text-[#0086F9]'>G</a><a className='text-[#FF4131]'>o</a><a className='text-[#FEBD00]'>o</a><a className='text-[#0086F9]'>g</a><a className='text-[#00AA4A]'>l</a><a className='text-[#FF4131]'>e</a> <a className='text-white'>Play</a></div>
        </div>
      </div>
        </div>
      </div>
      </div>
    );
  }