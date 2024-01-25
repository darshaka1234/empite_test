import React from "react";
import { Playfair_Display } from "next/font/google";
const playFair = Playfair_Display({
  subsets: ["latin"],
});
const Operation = () => {
  return (
    <div className="flex flex-col pb-20 md:pb-0 h-full bg-black px-5 sm:px-10 md:pl-28  xl:pt-28 xl:px-28 pt-10 sm:pt-20  md:pt-28 gap-3">
      <h4 className="text-[#717171]">WHAT WE DO</h4>
      <h1
        className={`text-white text-3xl lg:text-4xl xl:text-6xl font-semibold md:font-semibold leading-normal ${playFair.className}`}
      >
        Integrated tech solutions across all digital platforms
      </h1>
    </div>
  );
};

export default Operation;
