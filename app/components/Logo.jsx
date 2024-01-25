import React from "react";
import Image from "next/image";
const Logo = ({ path }) => {
  return (
    <div className="relative w-24 h-24 -mt-1 ">
      <Image src={path} alt="logo" layout="fill" />
    </div>
  );
};

export default Logo;
