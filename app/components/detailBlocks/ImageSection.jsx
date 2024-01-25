import React from "react";
import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="grid grid-cols-9 w-full  ">
      <div
        style={{ backgroundImage: "url(/four.png)" }}
        className="col-span-2 md:col-start-1 md:col-end-6 w- h-auto bg-contain  flex  justify-center items-center bg-red-500 "
      >
        <Image src="/darkplay.png" width={50} height={100} alt="image4" />
      </div>
      <div className="col-start-6 col-end-8 ">
        <img src="/five.png" alt="image5" className="w-full" />
      </div>
      <div className="col-start-8 col-end-9 h-full  ">
        <img src="/six.png" alt="image6" className="w-full h-full" />
      </div>
    </div>
  );
};

export default ImageSection;
