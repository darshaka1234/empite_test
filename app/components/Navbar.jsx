import React from "react";
import Logo from "./Logo";
import MyDrawer from "./MyDrawer";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-5 sm:px-10 md:px-28 md:pl-20 ">
        <Logo />
        <NavLinks />
        <MyDrawer />
      </div>
    </>
  );
};

export default Navbar;
