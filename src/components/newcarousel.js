"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { timelineSlider } from "./datas";
import Image from "next/image";
// import {
//   Group254,
//   Group256,
//   Group257,
//   Group260,
//   Group259,
//   Group261,
//   OneTap,
//   aip,
//   os,
//   plf,
//   ps,
//   pse,
// } from "../../public";


export default function CarouselSlider() {
  // const [swiper, setSwiper] = useState(null);
  // const [slideIndex, setSlideIndex] = useState(0);

  // const data = [
  //   {
  //      header: "Unlike Any Financial Solution You’ve Used Before",
  //     subheader:
  //       "Designed to the last pixel and engineered with unforgiving precision, PayWayve combines UI elegance with world-class performance.",
  //     img: Group254,
  //     img2: OneTap,
  //     quote1: "One Card, Endless Possibilities",
  //     quote2:
  //       "Introducing the Payway Card – your gateway to seamless transactions. With a simple tap, you can unlock a world of convenience. ",
  //     list1: "Quick and secure payments.",
  //     list2: "Effortless attendance tracking.",
  //     list3: "Convenient ride payments.",
  //     list4: "Eco-friendly transactions at our partner locations.",
  //     list5: "All-in-one solution for streamlined financial transactions.",
  //   },
  //   {
  //     "header": "Unlike Any Financial Solution You’ve Used Before",
  //     "subheader":
  //       "Designed to the last pixel and engineered with unforgiving precision, PayWayve combines UI elegance with world-class performance.",
  //     "img": Group256,
  //     "img2": os,
  //     "quote1": "Our software + Our Device + A tap card = A Simpler Life",
  //     "quote2":
  //       "Imagine a simpler life with Payway: Our powerful software, our cutting-edge device, and our innovative Tap Card work seamlessly together to transform the way you live and transact. Say goodbye to complexity and hello to convenience, security, and ease, all in one powerful combination.",
  //   },
  //   {
  //     "header": "Unlike Any Financial Solution You’ve Used Before",
  //     "subheader":
  //       "Designed to the last pixel and engineered with unforgiving precision, PayWayve combines UI elegance with world-class performance.",
  //     "img": Group257,
  //     "img2": plf,
  //     "quote1": "Pay Less For More With Paywayve",
  //     "list1": "Secure Transactions",
  //     "list2": "Seamless Subscriptions.",
  //     "list3": "Effortless Bill Splitting.",
  //     "list4": "Financial Insights.",
  //     "list5": "Personalized Financial Journey.",
  //     "list6": "Convenient Shared Subscriptions",
  //   },
  //   {
  //     "header": "Unlike Any Financial Solution You’ve Used Before",
  //     "subheader":
  //       "Designed to the last pixel and engineered with unforgiving precision, PayWayve combines UI elegance with world-class performance.",
  //     "img": Group259,
  //     "img2": ps,
  //     "quote1": "Piggy Save",
  //     "quote2":
  //       "Picture Piggy Save as your dedicated savings partner, here to help you achieve your financial dreams. With Piggy Save, you get access to a range of features designed to make saving easier and more rewarding. Check out the benefits: ",
  //     "list1": "Goal-Based Savings.",
  //     "list2": "Automated Deposits.",
  //     "list3": "High-Yield Interest.",
  //     "list4": "Financial Planning.",
  //     "list5":
  //       "Secure Savings, Easy Withdrawals, Flexible Goals and Personalized Savings.",
  //   },
  //   {
  //     "header": "Unlike Any Financial Solution You’ve Used Before",
  //     "subheader":
  //       "Designed to the last pixel and engineered with unforgiving precision, PayWayve combines UI elegance with world-class performance.",
  //     "img": Group260,
  //     "img2": aip,
  //     "quote1": "AI Powered Inventory Management System",
  //     "quote2":
  //       "An AI-Powered Inventory Management System leverages artificial intelligence to optimize inventory control, enhance efficiency, and reduce operational costs. ",
  //     "list1": "Real-time Tracking.",
  //     "list2": "Automated Reordering.",
  //     "list3": "Demand Forecasting.",
  //     "list4": "Cost Optimization, Inventory Analytics and Error Reduction.",
  //     "list5": "Supplier Management and Customization.",
  //   },
  //   {
  //     "header": "Unlike Any Financial Solution You’ve Used Before",
  //     "subheader":
  //       "Designed to the last pixel and engine ered with unforgiving precision, PayWayve combines UI elegance with world-class performance.",
  //     "img": Group261,
  //     "img2": pse,
  //     "quote1": "Pay, Save or Exchange your dollar",
  //     "quote2":
  //       "Welcome to our comprehensive financial platform, where you can effortlessly pay in Dollar for international transactions, secure your future by saving in Dollar with competitive rates, and smoothly exchange Naira to Dollar with transparent and competitive rates. No matter your financial objective, we provide the tools and solutions to help you manage your Naira to Dollar transactions effectively, ensuring you get the most value for your money.",
  //   },
  // ];

  // const handleSkip = () => {
  //   if (swiper) {
  //     swiper.slideNext();
  //     setSlideIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  return (
    <div className="bg-[#000212] text-white pt-[60px] text-center rounded-t-[50px] -mt-[270px] w-full h-[1250px]">
      <div className="font-bold px-80 text-[54px]">
        Unlike Any Financial Solution You’ve Used Before
      </div>
      <div className="px-[400px] pt-7">
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
                    className="w-1/2 ml-[400px] items-center justify-center p-12 "
                  />
                  <div className="w-full items-center justify-center text-center">
                    <div className="mt-8 ">
                      <div className="w-full justify-between px-52 text-center flex">
                        <div className="w-2/3 pt-26">
                          <div className="font-bold text-[48px]">{header}</div>
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
                        <Image src={img} className="pl-12 w-1/3" />
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
