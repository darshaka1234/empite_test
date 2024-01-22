import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Landing from "./components/blocks/Landing";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2">
        <div className="relative h-[100vh] ">
          <Image src="/One.png" alt="image 1" layout="fill" />
        </div>

        <Landing />
      </div>
    </div>
  );
};

export default page;
