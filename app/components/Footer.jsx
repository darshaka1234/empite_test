import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="px-5 sm:px-10 md:px-28 pt-5 sm:pt-10 md:pt-28 pb-10 text-white bg-black flex flex-col gap-20">
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 ">
        <div className="-mt-10">
          <Logo path="/blacklogo.svg" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 pr-32">
            <h4 className="text-body font-medium">Melbourne</h4>
            <h4 className="font-semibold text-lg">
              Level 1, Unit 9 / 677 Springvale Road, Mulgrave VIC 3170
            </h4>
          </div>
          <div className="flex flex-col gap-6 pr-32">
            <h4 className="text-body font-medium">Colombo</h4>
            <h4 className="font-semibold text-lg">
              Level 4, 46/38, Navam Mawatha, Colombo 02, 00200
            </h4>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <h4 className="text-body font-medium">Work inquiries</h4>
            <h4 className="font-semibold text-lg">
              Interested in working with us? hello@empite.com
            </h4>
          </div>
        </div>
        <div className=" flex flex-col gap-6">
          <h4 className="text-body font-medium">Stay in touch</h4>
          <div className="flex">
            <input
              type="text"
              className="bg-[#1F1E22] h-16 rounded-l-md pl-5"
              placeholder="Your email address"
            />
            <button className="bg-[#1F1E22] pr-5 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <h1 className=" font-medium">© 2020, Empite Pty Ltd</h1>
    </div>
  );
};

export default Footer;
