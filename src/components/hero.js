"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroPic, OneTap, Ui, Logo } from "../../public";
import { DiApple } from "react-icons/di";
import { BiLogoPlayStore } from "react-icons/bi";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [" One Tap.", " One app", " One Solution"];

function CTA() {

  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 6 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="pt-6 lg:pt-40 lg:ml-24 w-full">
      <div className="text-black text-[38px] lg:text-[60px] w-full text-center font-bold">
        Do All With
        <span>
          <TextTransition
            className="flex items-center md:items-end justify-center font-bold text-3xl md:text-6xl"
            springConfig={presets.wobbly}
          > Just
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </span>
      </div>
      <div className="text-black px-6 text-center text-[20px] sm:w-full lg:px-12 lg:ml-10 pt-5 lg:w-[481px]">
        The card that simplifies payments, tracks attendance, and powers your
        ride with PayWayve platform.
      </div>
      <div className="pl-24 mt-6 items-center lg:ml-16 lg:mt-12">
        <div className="w-2/3 ">
        <Link href="/waitlist">
          <div className="text-white bg-[#9A11FF] cursor-pointer w-full text-[20px] h-[62px] ml-6 shadow-2xl font-bold text-center py-4 rounded-md">
            Join PayWayve
          </div>
          </Link>
        </div>
        <div className="flex w-2/3 ml-6  gap-2 mt-5">
          <div className="text-white pt-1 flex cursor-pointer bg-black w-1/2 h-[42px] lg:h-[62px]  shadow-2xl rounded-md">
            <div className="flex">
              <DiApple className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]" />
            </div>
            <div className="flex-1 py-2">
              <div className="lg:text-[12px] text-[8px]">Download on</div>
              <div className=" lg:text-[14px] text-[10px] font-bold">Apple Store</div>
            </div>
          </div>
          <div className="text-white pt-1 cursor-pointer flex bg-black w-1/2 h-[42px] lg:h-[62px] shadow-2xl rounded-md">
            <div className="flex">
              <BiLogoPlayStore className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]" />
            </div>
            <div className="flex-1 py-2">
              <div className="lg:text-[12px] text-[8px]">Get it on</div>
              <div className="lg:text-[14px] text-[10px] font-bold">
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
    <div className="w-full h-full flex-1 lg:flex">
      <div className="lg:px-24">
        <CTA />
      </div>
      <div className="sm:w-full sm:pl-6">
        <Image alt="Hero" src={HeroPic} />
      </div>
    </div>
  );
}
