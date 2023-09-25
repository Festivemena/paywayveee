import Image from "next/image";
import { Logo } from "../../public";
import { DiApple } from "react-icons/di";
import { BiLogoPlayStore } from 'react-icons/bi'

export default function Footer() {
    return (
      <div className="bg-[#000212] flex-1 border-t-1 border-white  w-full">
        <div className=" flex w-88 h-0.5 bg-[#000300]"></div>

        <div className="flex w-full text-center px-4 lg:px-32 pt-12 justify-between">
          <div className="hidden lg:flex">
            <Image alt="logo" src={Logo} />
          </div>
          <div className="flex-col text-white w-1/7 text-center justify-center items-center">
            <div className="lg:text-[20px] text-[16px] text-start p-2 font-bold">Personal</div>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Discover
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Transfer and Spend
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Piggy Save
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Buy Airtime
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Buy Data
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Get Card
            </button>
          </div>
          <div className="flex-col w-1/7 text-white justify-center items-center">
            <div className="lg:text-[20px] text-[16px] text-start p-2 font-bold">Business</div>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Discover
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Business Integration
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              One Tap Device
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Inventory
            </button>
          </div>
          <div className="flex-col w-1/7 text-white justify-center items-center">
            <div className="lg:text-[20px] text-[16px] text-start p-2 font-bold">Company</div>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Blog
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Press & Recognition
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Join Our Team
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              About Us
            </button>
          </div>
          <div className="flex-col w-1/7 text-center text-white justify-center items-center">
            <div className="lg:text-[20px] text-[16px] text-start flex p-2 font-bold">
              Help
            </div>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              FAQ
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Speak With Us
            </button>
            <button className="lg:text-[16px] text-left text-[12px] flex hover:text-purple-950 p-2 font-light">
              Security
            </button>
          </div>
        </div>
        <div className="flex px-8 lg:px-32 pt-10">
          <div className="w-1/3 ">
            <button className="text-white bg-[#9A11FF] cursor-pointer w-36 lg:w-80 text-[12px] lg:text-[15px] h-[32px] lg:h-[50px] shadow-2xl font-bold text-center py-2 rounded-md">
              Join PayWayve
            </button>
          </div>
          <div className="flex justify-center justify-items-center">
            <div className="text-white ml-2 pt-1 flex cursor-pointer bg-black w-36 lg:w-[152px] h-[36px] lg:h-[50px] shadow-2xl rounded-md">
              <div className="pt-1 flex">
                <DiApple className="lg:w-[48px] py-0.5 w-[28px] h-[28px] lg:h-[48px]" />
              </div>
              <div className="flex-1">
                <div className="text-[9px] lg:text-[12px]">Download on the</div>
                <div className="text-[11px] font-bold">Apple Store</div>
              </div>
            </div>
            <div className="text-white ml-2 pt-1 flex cursor-pointer bg-black w-36 lg:w-[152px] h-[36px] lg:h-[50px] shadow-2xl rounded-md">
              <div className="flex">
                <BiLogoPlayStore className="lg:w-[48px] py-0.5 w-[28px] h-[28px] lg:h-[48px]" />
              </div>
              <div className="flex-1">
                <div className="text-[9px] lg:text-[12px]">Get it on</div>
                <div className="text-[11px] font-bold">
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
        <div className="flex w-full text-center px-4 lg:px-32 pt-12 justify-between">
          <div className="flex-col text-white w-1/6 text-center justify-center items-center">
            <div className="lg:text-[20px] text-[14px] text-start p-2 font-bold">Contact</div>
            <div className="lg:text-[16px] text-[9px] flex underline text-purple-600 p-2 font-light">
              help@paywayve.com
            </div>
          </div>
          <div className="flex-col w-1/6 text-white justify-center items-center">
            <div className="lg:text-[20px] text-[14px] text-start p-2 font-bold">Lagos</div>
            <div className="lg:text-[16px] text-left text-[12px] fle p-2 font-light">
              No # Address Unknown Street, Lagos Integration
            </div>
          </div>
          <div className="flex-col w-1/6 text-white justify-center items-center">
            <div className="lg:text-[20px] text-[14px] text-start p-2 font-bold">Benin</div>
            <div className="lg:text-[16px] text-left text-[12px] fle p-2 font-light">
              No # Address Unknown Street, Benin, Edo.
            </div>
          </div>
          <div className="flex-col w-1/6 text-center text-white justify-center items-center">
            <div className="lg:text-[20px] text-[14px] text-start p-2 font-bold">
              Abuja
            </div>
            <div className="lg:text-[16px] text-left text-[12px] fle p-2 font-light">
              No # Address Unknown Street, FCT,{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }