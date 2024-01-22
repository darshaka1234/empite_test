import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center pl-28 pr-60 gap-8 mb-12">
      <div className="text-7xl  ">
        Pushing The Envelope of Software Development
      </div>
      <div className="max-w-72 font-medium">
        With unique business ideas and the passionate people behind.
      </div>
      <div className="flex gap-20">
        <div>
          <button className="bg-black text-white py-4 px-8 rounded-md text-sm">
            Get Started
          </button>
        </div>
        <div className="flex items-center gap-5 ">
          <div>
            <BsPlayCircle className="text-6xl" />
          </div>
          <div className="font-semibold">How it works</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
