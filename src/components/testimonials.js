import Image from "next/image";
import { Ijeoma, Justin, Kingsley, Vector2 } from "../../public";

function Individual() {
  return (
    <div className=" shadow-3xl lg:-mt-[600px] absolute -mt-[500px] text-black justify-between items-center flex-1 lg:flex z-20 ">
      <div className="lg:px-20 mr-10 flex-1 lg:flex">
      <div className="lg:w-1/2 w-full p-4 mr-5 bg-white shadow-2xl rounded-lg ">
        <div className="w-full flex">
          <Image className="w-24 h-24 lg:w-32 lg:h-32 rounded-full" alt="Ijeoma"  src={Ijeoma} />
          <div className="flex-1 pl-6 py-8 ">
            <div className="lg:text-[20px] text-[16px] font-bold">Ijeoma Ogiokpe</div>
            <div className="lg:text-[18px] text-[14px]">News caster</div>
          </div>
        </div>
        <div className="text-[16px] bg-[#F2FCFF] py-2 text-left px-16 mt-8">
        Using the Paywayve Card has truly transformed the way I handle my daily transactions. Whether it&apos;s making payments with a simple tap, marking attendance effortlessly, or paying for rides within the Payway partner ecosystem, this card has become an indispensable part of my life. The security measures in place also give me peace of mind, and it&apos;s such a relief to know that my transactions are protected. Plus, the fact that it&apos;s widely accepted at partner locations makes it incredibly convenient. I also appreciate the eco-friendly aspect of going paperless. I&apos;s a game-changer, and I couldn&apos;t be happier with the Payway Card – it&apos;s the future of fintech!
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
        Paywayve Card simplifies my life – tap for payments, attendance, and ride payments. Secure, accepted everywhere, and eco-friendly. It&apos;s a game-changer!
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

function IndividualMobile() {
  return (
    <div className=" shadow-3xl lg:-mt-[600px] absolute -mt-[520px] text-black justify-between items-center flex-1 lg:flex z-20 ">
      <div className="lg:px-20 px-4 flex-1 lg:flex">
      <div className="lg:w-1/2 w-full py-2 px-4 bg-white shadow-2xl rounded-lg ">
        <div className="w-full flex">
          <Image className="w-16 h-16 lg:w-32 lg:h-32 rounded-full" alt="Ijeoma"  src={Ijeoma} />
          <div className="flex-1 pl-6 py-2">
            <div className="lg:text-[20px] text-[16px] font-bold">Ijeoma Ogiokpe</div>
            <div className="lg:text-[18px] text-[14px]">News caster</div>
          </div>
        </div>
        <div className="text-[12px] lg:text-[16px] bg-[#F2FCFF] py-2 text-left px-4 lg:px-16 mt-1 lg:mt-8">
        Using the Paywayve Card has truly transformed the way I handle my daily transactions.
        </div>
        <div className="px-6 text-[10px] pt-2 lg:pt-8">22 Feb 2023 . 8:15 AM</div>
      </div>
      <div className="lg:w-1/2 w-full shadow-2xl justify-between rounded-lg flex-1">
        <div className="w-full bg-white mt-1 p-4 h-1\2 rounded-lg">
        <div className="w-full flex">
          <Image className="w-16 h-16 lg:w-32 lg:h-32 rounded-full" alt="Kingsley" src={Kingsley} />
          <div className="flex-1 pl-6 py-2">
            <div className="lg:text-[20px] text-[16px] font-bold">Kingsley Peters</div>
            <div className="lg:text-[18px] text-[14px]">Chemical Engineer</div>
          </div>
        </div>
        <div className="text-[12px] lg:text-[16px] bg-[#F2FCFF] py-2 text-left px-4 lg:px-16 mt-1 lg:mt-8">
        Paywayve Card simplifies my life – tap for payments, attendance, and ride payments. Secure, accepted everywhere, and eco-friendly. It&apos;s a game-changer!
        </div>
        <div className="px-6 pt-2 text-[10px] lg:pt-8">22 Feb 2023 . 8:15 AM</div>
        </div>
        <div className="w-full bg-white mt-1 p-4 h-1\2 rounded-lg">
        <div className="w-full flex">
          <Image className="w-16 h-16 lg:w-32 lg:h-32 rounded-full" alt="Justin" src={Justin} />
          <div className="flex-1 pl-6 py-2 ">
            <div className="lg:text-[20px] text-[16px] font-bold">Justin Oluremi</div>
            <div className="lg:text-[18px] text-[14px]">Student</div>
          </div>
        </div>
        <div className="text-[12px] lg:text-[16px] bg-[#F2FCFF] py-2 text-left px-4 lg:px-16 mt-1 lg:mt-8">
        Paywayve Card has revolutionized my transac...
        </div>
        <div className="px-6 pt-2 text-[10px] lg:pt-8">22 Feb 2023 . 8:15 AM</div>
        </div>
      </div>
      </div>
    </div>
  );
}


export default function Testimonials() {
    return (
      <div className="bg-white h-full text-black pb-8 relative w-full">
        <div className="w-full flex-1 lg:flex">
          <div className="w-full h-full pt-16 lg:pt-40 lg:top-0 lg:left-0">
            <div className="w-full text-center text-[24px] lg:text-[38px] font-bold">
              Don&apos;t Take Our Word For IT
            </div>
            <div className="w-full text-center text-[18px] lg:text-[26px]">
              Trust Our Customers
            </div>
          </div>
          <div className="w-full pt-6 lg:pt-28 lg:pl-[350px] lg:items-end  lg:text-right">
            <Image
              className="justify-end items-end"
              alt="Vector"
              src={Vector2}
            />
          </div>
        </div>
        <div className="hidden lg:flex">
        <Individual />
        </div>
        <div className="flex lg:hidden">
        <IndividualMobile />
        </div>
        <div className="text-[16px] font-bold mt-16 pl-12">
          All testimonial posts...
        </div>
      </div>
    );
  }