import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
const playFair = Playfair_Display({
  subsets: ["latin"],
});
const Capabilities = () => {
  return (
    <div
      className="bg-cover h-52 md:h-full text-white pl-5 sm:pl-10 md:pl-28 py-52"
      style={{ backgroundImage: "url(/shoecase.png)" }}
    >
      <h4 className="uppercase text-xs md:text-lg">showcase</h4>
      <div
        className={`flex flex-col font-bold text-2xl lg:text-4xl xl:text-5xl ${playFair.className}`}
      >
        <h1>Our most recent</h1>
        <h1>projects.</h1>
      </div>
      <button className="flex rounded-md text-white bg-black py-2 px-3 md:py-4 md:px-5 gap-3 items-center mt-5 md:mt-12">
        <p className="text-nowrap text-xs md:text-md">View Services</p>
        <div>
          <Image
            src="/next.png"
            width={100}
            height={100}
            alt="next"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </button>
    </div>
  );
};

export default Capabilities;
