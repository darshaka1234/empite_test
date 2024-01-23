"use client";

import React, { useState } from "react";
import { navbarItems } from "./NavLinks";
import CloseButton from "./buttons/CloseButton";
import MenuButton from "./buttons/MenuButton";

const Drawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden ">
      {open ? (
        <div className="flex justify-between pt-5 bg-slate-200 md:pr-5">
          <div className="flex flex-col h-screen pt-3  gap-5 px-5 ">
            {navbarItems.map((i) => (
              <p key={i}>{i}</p>
            ))}
            <button className="bg-black px-2 rounded-md py-2 px-5 max-w-32 ">
              <p className="text-sm text-white font-light ">Let's Talk</p>
            </button>
          </div>
          <CloseButton onClick={() => setOpen(false)} />
        </div>
      ) : (
        <div className="mt-9 mr-5 md:mr-10">
          <MenuButton onClick={() => setOpen(true)} />
        </div>
      )}
    </div>
  );
};

export default Drawer;
