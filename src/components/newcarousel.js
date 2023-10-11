"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { timelineSlider } from "./datas";
import Image from "next/image";

export default function CarouselSlider() {

  return (
    <div className="bg-[#000212] text-white pt-[60px] text-center rounded-t-[50px] -mt-[220px] lg:-mt-[350px] w-full h-[1250px]">
      <div className="font-bold px-6 text-[24px] lg:px-80 lg:text-[54px]">
        Unlike Any Financial Solution You’ve Used Before
      </div>
      <div className="lg:px-[400px] px-3 pt-7">
        Designed to the last pixel and engineered with unforgiving precision,
        PayWayve combines UI elegance with world-class performance.
      </div>
      <div className="w-full items-center justify-center text-center">
        <Swiper
          className="Slider items-center justify-center"
          modules={[Navigation]}
          navigation={true}
        >
          {timelineSlider.slideins.map((slidein, index) => {
            const {
              timeline,
              header,
              subheader,
              img,
              list1,
              list2,
              list3,
              list4,
              list5,
              list6,
            } = slidein;
            return (
              <SwiperSlide className="h-[1200px] justify-center" key={index}>
                <div>
                  <Image
                    src={timeline}
                    className="lg:w-1/2 w-2/3 lg:ml-[400px] ml-24 h-4 items-center justify-center lg:p-12 "
                  />
                  <div className="w-full items-center justify-center text-center">
                    <div className="mt-8 ">
                      <div className="w-full justify-between pl-3 px-1 lg:px-52 text-center flex">
                        <div className="lg:w-2/3 w-1/2 pt-26">
                          <div className="font-bold text-[20px] lg:text-[48px]">{header}</div>
                          <div>{subheader}</div>
                          <ol className="pt-6 font-extralight flex-col">
                            <span className="items-start p-4 flex">
                              {list1}
                            </span>
                            <span className="items-start p-4 flex">
                              {list2}
                            </span>
                            <span className="items-start p-4 flex">
                              {list3}
                            </span>
                            <span className="items-start p-4 flex">
                              {list4}
                            </span>
                            <span className="items-start p-4 flex">
                              {list5}
                            </span>
                            <span className="items-start p-4 flex">
                              {list6}
                            </span>
                          </ol>
                        </div>
                        <Image src={img} className="lg:pl-12 pl-4 w-1/2" />
                      </div>
                      <button className=" bg-purple-600 ml-[800px] mt-10 rounded-full h-20 w-20 text-white font-black text-xl">
                        <span
                          className="hover:swiper-button-next flex-1 ml-[2000]"
                          id="slide"
                        >
                          Skip
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
