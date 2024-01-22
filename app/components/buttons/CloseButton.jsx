"use client";

import React from "react";
import { RxCross2 } from "react-icons/rx";

const CloseButton = ({ onClick }) => {
  return (
    <>
      <RxCross2 className="mt-3 mr-5" onClick={onClick} />
    </>
  );
};

export default CloseButton;
