import React from "react";
import Image from "next/image";

const Navbar = () => {
  const navbarItems = ["Home", "About us", "Portfolio", "Services"];
  return (
    <>
      <div className="flex justify-between px-28 pt-4">
        <Image src="./Logo.svg" width={100} height={50} alt="logo" />
        <div className="flex gap-12 mt-3 items-center">
          {navbarItems.map((i) => (
            <p key={i} className="font-medium">
              {i}
            </p>
          ))}
          <button className="bg-black px-2 rounded-md py-2 px-5">
            <p className="text-sm text-white font-light">Let's Talk</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
