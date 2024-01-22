import React from "react";
export const navbarItems = ["Home", "About us", "Portfolio", "Services"];
const NavLinks = () => {
  return (
    <div className="hidden md:flex gap-7 lg:gap-14  items-center">
      {navbarItems.map((i) => (
        <p key={i} className="font-medium">
          {i}
        </p>
      ))}
      <button className="bg-black px-2 rounded-md py-2 px-5">
        <p className="text-sm text-white font-light">Let's Talk</p>
      </button>
    </div>
  );
};

export default NavLinks;
