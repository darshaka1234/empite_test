import React from "react";
import { BsChatRightFill } from "react-icons/bs";

import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
});
const Progress = () => {
  return (
    <div className="flex flex-col px-5 sm:px-10 md:px-28 md:mt-0 justify-center gap-10 py-10 xl:py-28 ">
      <h4 className="uppercase text-xs md:text-lg">capabilities</h4>
      <div
        className={`flex flex-col font-bold text-2xl lg:text-4xl xl:text-6xl  text-black ${playFair.className}`}
      >
        We help to create Digital strategies.
      </div>
      <div>
        <div className="flex items-center justify-between w-[80%]">
          <p className="text-nowrap text-xs md:text-lg font-medium">
            Website & Mobile Development
          </p>
          <BsChatRightFill className="text-3xl" />
        </div>
        <div className="flex w-full">
          <hr className="border-4 border-red-600 rounded-md w-[80%]" />
          <hr className="border-4 border-gray-300 rounded-r-md w-[20%]" />
        </div>
      </div>
    </div>
  );
};

export default Progress;
