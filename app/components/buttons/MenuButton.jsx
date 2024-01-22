"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuButton = ({ onClick }) => {
  return (
    <>
      <GiHamburgerMenu onClick={onClick} />
    </>
  );
};

export default MenuButton;
