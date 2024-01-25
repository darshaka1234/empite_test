import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
});
const Landing = () => {
  return (
    <div className="flex flex-col justify-center px-5 sm:px-10 mt-10 sm:mt-20 md:mt-5 lg:pl-12 xl:pl-28 md:pr-36 lg:pr-60 gap-8 sm:gap-12 md:gap-4 lg:gap-6 xl:gap-8 mb-12 ">
      <div
        className={`text-4xl sm:text-5xl md:text-4xl xl:text-5xl 2xl:text-7xl ${playFair.className} font-bold `}
      >
        Pushing The Envelope of Software Development
      </div>
      <div className="max-w-72 md:max-w-none font-medium">
        With unique business ideas and the passionate people behind.
      </div>
      <div className="flex gap-10 md:gap-14 lg:gap-20 items-center">
        <div>
          <button className="bg-black text-white py-3 sm:py-4 md:py-3 lg:py-5 px-5 sm:px-6 md:px-8 rounded-md text-xs sm:text-sm lg:text-md text-nowrap">
            Get Started
          </button>
        </div>
        <div className="flex items-center gap-3  lg:gap-5 ">
          <Image
            src="/play.svg"
            width={40}
            height={40}
            alt="play button"
            layout="responsive"
          />
          <div className="font-semibold text-nowrap text-xs sm:text-sm lg:text-md">
            How it works
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
