"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import {
  Group254,
  Group256,
  Group257,
  Group260,
  Group259,
  Group261,
  OneTap,
  aip,
  os,
  plf,
  ps,
  pse,
} from "../../public";
import { EffectFade, Navigation, Pagination } from "swiper/modules";


function Explainer() {

    
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
    >
      <SwiperSlide className=" justify-center">
        <div>
          <Image
            src={Group254}
            className="w-1/2 ml-[400px] items-center justify-center p-12 "
          />
          <div className="w-full items-center justify-center text-center">
            <div className="mt-6">
              <div className="w-full justify-between px-52 text-center flex">
                <div className="w-2/3 pt-36">
                  <div className="font-bold text-[48px]">
                    One Card, Endless Possibilities
                  </div>
                  <div>
                    Introducing the Payway Card – your gateway to seamless
                    transactions. With a simple tap, you can unlock a world of
                    convenience.
                  </div>
                  <ol className="pt-2 justify-center items-center font-extralight flex-1">
                    <span className="items-start flex">
                      Quick and secure payments.
                    </span>
                    <span className="items-start flex">
                      Effortless attendance tracking.
                    </span>
                    <span className="items-start flex">
                      Convenient ride payments.
                    </span>
                    <span className="items-start flex">
                      Eco-friendly transactions at our partner locations.
                    </span>
                    <span className="items-start flex">
                      All-in-one solution for streamlined financial
                      transactions.
                    </span>
                    {/* <span className="items-start">{card.list6}</span> */}
                  </ol>
                </div>
                <Image src={OneTap} className="pl-12 w-1/3" />
              </div>
              <button
                className="bg-purple-600 ml-[800px] mt-10 rounded-full h-20 w-20 text-white font-black text-xl"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className=" justify-center">
        <div>
          <Image
            src={Group256}
            className="w-1/2 ml-[400px] items-center justify-center p-12 "
          />
          <div className="w-full items-center justify-center text-center">
            <div className="mt-6">
              <div className="w-full justify-between px-52 text-center flex">
                <div className="w-2/3 pt-36">
                  <div className="font-bold text-[48px]">
                    One Card, Endless Possibilities
                  </div>
                  <div>
                    Introducing the Payway Card – your gateway to seamless
                    transactions. With a simple tap, you can unlock a world of
                    convenience.
                  </div>
                  <ol className="pt-2 justify-center items-center font-extralight flex-1">
                    <span className="items-start flex">
                      Quick and secure payments.
                    </span>
                    <span className="items-start flex">
                      Effortless attendance tracking.
                    </span>
                    <span className="items-start flex">
                      Convenient ride payments.
                    </span>
                    <span className="items-start flex">
                      Eco-friendly transactions at our partner locations.
                    </span>
                    <span className="items-start flex">
                      All-in-one solution for streamlined financial
                      transactions.
                    </span>
                    {/* <span className="items-start">{card.list6}</span> */}
                  </ol>
                </div>
                <Image src={OneTap} className="pl-12 w-1/3" />
              </div>
              <button
                className="bg-purple-600 ml-[800px] mt-10 rounded-full h-20 w-20 text-white font-black text-xl"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default function Carousel() {
  return (
    <div className="bg-[#000212] text-white pt-[60px] text-center rounded-t-[50px] -mt-[270px] w-full h-[1100px]">
      <div className="font-bold px-80 text-[54px]">
        Unlike Any Financial Solution You’ve Used Before
      </div>
      <div className="px-[400px] pt-7">
        Designed to the last pixel and engineered with unforgiving precision,
        PayWayve combines UI elegance with world-class performance.
      </div>
      <div className="w-full items-center justify-center text-center">
        <Explainer />
      </div>
    </div>
  );
}
