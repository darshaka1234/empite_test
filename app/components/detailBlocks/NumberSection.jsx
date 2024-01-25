import React from "react";
import Image from "next/image";

const NumberSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  p-5 sm:px-12 md:p-28 gap-10 ">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-start">
          <div className="mt-2">
            <Image src="/reddot.png" width={40} height={40} alt="redDot" />
          </div>
          <h1 className="text-5xl font-bold ">236</h1>
        </div>
        <h1 className="text-md font-bold max-w-32">Succedded Project</h1>
        <h1 className="font-medium max-w-80">
          Our clients describe us as a product team which creates
          <b>amazing UI/UX</b>, by crafting top-notch user experience.
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-start">
          <div className="mt-2">
            <Image src="/reddot.png" width={40} height={40} alt="redDot" />
          </div>
          <h1 className="text-5xl font-bold ">9346</h1>
        </div>
        <h1 className="text-md font-bold max-w-32">Working hours Were spent</h1>
        <h1 className="font-medium max-w-96">
          We’ve structured our workflow processes were from the funny{" "}
          <b>the century rather</b>, initial all the made, have spare to
          negatives.
        </h1>
      </div>
    </div>
  );
};

export default NumberSection;
