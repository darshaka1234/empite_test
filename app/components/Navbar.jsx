import React from "react";
import Logo from "./Logo";
import Drawer from "./Drawer";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between pl-10 md:px-28 ">
        <Logo />
        <NavLinks />
        <Drawer />
      </div>
    </>
  );
};

export default Navbar;
