import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
const playFair = Playfair_Display({
  subsets: ["latin"],
});
const ShowCase = () => {
  return (
    <div
      className="bg-cover h-52 md:h-full text-white pl-5 sm:pl-10 md:pl-28 py-52"
      style={{ backgroundImage: "url(/Capabilities.png)" }}
    >
      <div>
        <h4 className="uppercase text-xs md:text-lg">capabilities</h4>
        <div
          className={`flex flex-col font-bold text-2xl lg:text-4xl xl:text-5xl mt-1 md:mt-5 ${playFair.className}`}
        >
          <h1>Mobile.</h1>
          <h1>Web.</h1>
          <h1>Cloud.</h1>
        </div>
        <button className="flex rounded-md text-white bg-black py-2 px-3 md:py-4 md:px-5 gap-3 items-center mt-5">
          <p className="text-nowrap text-xs md:text-md">View Services</p>
          <Image
            src="/next.png"
            width={100}
            height={100}
            alt="next"
            layout="responsive"
            objectFit="contain"
          />
        </button>
      </div>
    </div>
  );
};

export default ShowCase;
