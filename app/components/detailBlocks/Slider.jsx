"use client";

import React, { useState } from "react";
import Image from "next/image";

const data = [
  {
    title: "We help to achieve mutual goals.",
    subTitle: "“Great Development Team”",
    desc: "“Need a one life feedback from Jared about empire and its work related to good 2 give.”",
    img: "/profile.png",
    name: "Jared Ortlipp",
    position: "CTO, Good 2 Give",
  },
  {
    title: "som new achieve mutual goals.",
    subTitle: "2  “Great Development Team”",
    desc: "2 “Need a one life feedback from Jared about empire and its work related to good 2 give.”",
    img: "/profile.png",
    name: "2 Jared Ortlipp",
    position: "2  CTO, Good 2 Give",
  },
  {
    title: "this is new achieve mutual goals.",
    subTitle: "3 “Great Development Team”",
    desc: "3  “Need a one life feedback from Jared about empire and its work related to good 2 give.”",
    img: "/profile.png",
    name: "3   Jared Ortlipp",
    position: "3  CTO, Good 2 Give",
  },
];
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
});
const Slider = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex flex-col gap-8 pt-5 sm:pt-10 xl:pt-28 pr-5 sm:pr-10 md:pr-28">
      <h1 className="uppercase text-[#2C2C2C] font-semibold">Testimonials</h1>
      <h1
        className={`text-3xl md:text-6xl  font-semibold ${playFair.className}`}
      >
        {data[current].title}
      </h1>
      <Image
        src={`${data[current].img}`}
        width={60}
        height={60}
        alt="Profile"
        className="rounded-full"
      />
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-lg">{data[current].subTitle}</h2>
        <h2 className="font-medium">{data[current].desc}</h2>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-lg">{data[current].name}</h2>
        <h2 className="font-medium">{data[current].position}</h2>
      </div>
      <div className="flex justify-between mt-5 md:mt-10 mb-5">
        <div className="flex items-center gap-5 font-semibold">
          <h1>1</h1>
          <hr className="border-[1px] border-black w-12" />
          <h1>3</h1>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-10">
            <Image
              src="/prev.svg"
              width={40}
              height={40}
              alt="prev"
              className="cursor-pointer"
              onClick={() => setCurrent((prev) => Math.abs(prev - 2) % 3)}
            />
          </div>
          <div>
            <Image
              src="/nextArrow.svg"
              width={40}
              height={40}
              alt="prev"
              onClick={() => setCurrent((prev) => Math.abs(prev + 1) % 3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
