import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Landing from "./components/blocks/Landing";
import Services from "./components/blocks/Services";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="grid  grid-cols-1 md:grid-cols-2">
        <div className="relative h-[100vh] ">
          <Image src="/One.png" alt="image 1" layout="fill" />
        </div>
        <Landing />
        <div className="flex flex-col h-[100vh] bg-black md:px-28 md:pt-28 gap-3">
          <h4 className="text-[#717171]">WHAT WE DO</h4>
          <h1 className="text-white text-5xl font-bold leading-normal">
            Integrated tech solutions across all digital platforms
          </h1>
        </div>
        <Services />
      </div>
    </div>
  );
};

export default page;
