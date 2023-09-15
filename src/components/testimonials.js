import Image from "next/image";
import { Ijeoma, Justin, Kingsley, Vector2 } from "../../public";

function Individual() {
  return (
    <div className=" shadow-3xl -mt-[530px] text-black justify-between items-center flex z-20  absolute">
      <div className="px-20 mr-10 flex">
      <div className="w-1/2 p-4 mr-5  shadow-2xl rounded-lg ">
        <div className="w-full flex">
          <Image className="rounded-full" alt="Ijeoma" src={Ijeoma} />
          <div className="flex-1 pl-6 py-8 ">
            <div className="text-[20px] font-bold">Ijeoma Ogiokpe</div>
            <div className="text-[18px]">News caster</div>
          </div>
        </div>
        <div className="text-[16px] bg-[#F2FCFF] py-2 text-left px-16 mt-8">
        Using the Paywayve Card has truly transformed the way I handle my daily transactions. Whether it's making payments with a simple tap, marking attendance effortlessly, or paying for rides within the Payway partner ecosystem, this card has become an indispensable part of my life. The security measures in place also give me peace of mind, and it's such a relief to know that my transactions are protected. Plus, the fact that it's widely accepted at partner locations makes it incredibly convenient. I also appreciate the eco-friendly aspect of going paperless. It's a game-changer, and I couldn't be happier with the Payway Card – it's the future of fintech!
        </div>
        <div className="px-6 pt-8">22 Feb 2023 . 8:15 AM</div>
      </div>
      <div className="w-1/2 shadow-2xl justify-between rounded-lg flex-1">
        <div className="w-full bg-white p-4 h-1\2 rounded-lg">
        <div className="w-full flex">
          <Image className="rounded-full" alt="Kingsley" src={Kingsley} />
          <div className="flex-1 pl-6 py-8 ">
            <div className="text-[20px] font-bold">Kingsley Peters</div>
            <div className="text-[18px]">Chemical Engineer</div>
          </div>
        </div>
        <div className="text-[14px] bg-[#F2FCFF] py-2 text-left px-6 mt-8">
        Paywayve Card simplifies my life – tap for payments, attendance, and ride payments. Secure, accepted everywhere, and eco-friendly. It's a game-changer!
        </div>
        <div className="px-6 pt-8">22 Feb 2023 . 8:15 AM</div>
        </div>
        <div className="w-full bg-white mt-9 p-4 h-1\2 rounded-lg">
        <div className="w-full flex">
          <Image className="rounded-full" alt="Justin" src={Justin} />
          <div className="flex-1 pl-6 py-8 ">
            <div className="text-[20px] font-bold">Justin Oluremi</div>
            <div className="text-[18px]">Student</div>
          </div>
        </div>
        <div className="text-[14px] bg-[#F2FCFF] py-2 text-left px-6 mt-8">
        Paywayve Card has revolutionized my transac...
        </div>
        <div className="px-6 pt-8">22 Feb 2023 . 8:15 AM</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
    return (
     <div className="bg-white h-full pb-8 relative w-full h-96">
      <div className="w-full relative flex">
      <div className="w-1/2 h-full pt-60 top-0 left-0">
        <div className="w-full text-center text-[38px] font-bold">Don't Take Our Word For IT</div>
        <div className="w-ful text-center text-[26px]">Trust Our Customers</div>
      </div>
      <div className="w-1/2 pt-28  justify-right items-right text-right">
        <Image alt="Vector" src={Vector2} />
      </div>
      </div>
      <Individual />
      <div className="text-[16px] font-bold mt-16 pl-12">All testimonial posts...</div>
     </div>
    );
  }