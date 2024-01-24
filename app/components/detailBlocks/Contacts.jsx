import React from "react";
import Image from "next/image";
const Contacts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <Image
        src="/map.png"
        height={50}
        width={100}
        alt="map"
        layout="responsive"
      />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-5 justify-center pl-5 sm:pl-10 md:pl-20 xl:pl-28 py-10 md:py-0">
          <Image src="/telephone.png" height={30} width={30} alt="telephone" />
          <h1 className="font-bold">Get in touch</h1>
          <div className="flex flex-col">
            <h1>Work and general inquiries</h1>
            <h1 className="font-semibold">+610.809.120.6705</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Assistance hours:</h1>
            <h1>Monday - Friday</h1>
            <h1>9.00 am to 5.00 pm</h1>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center bg-gray-100 pl-5 sm:pl-10 md:pl-20 xl:pl-28 py-5 md:py-0">
          <Image src="/email.png" height={40} width={40} alt="telephone" />
          <h1 className="font-bold">Post address</h1>
          <h1 className="max-w-40">
            Level 1, Unit 9 / 677 Springvale Road, Mulgrave VIC 3170 Australia
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
