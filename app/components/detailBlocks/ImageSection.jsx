import React from "react";
import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="grid grid-cols-9 w-full  ">
      <div className="col-span-2 col-start-1 col-end-6 bg-contain flex  justify-center items-center ">
        <div className="relative flex items-center justify-center w-full h-full">
          <Image
            src="/four.png"
            width={50}
            height={100}
            alt="image4"
            layout="responsive"
            className="relative"
          />
          <Image
            src="/darkplay.png"
            height={50}
            width={50}
            alt="map"
            className="absolute top-50 left-auto z-10"
          />
        </div>
      </div>
      <div className="col-start-6 col-end-8 ">
        <img src="/five.png" alt="image5" className="w-full max-h-[550px]" />
      </div>
      <div className="col-start-8 col-end-9 h-full  ">
        <img src="/six.png" alt="image6" className="w-full h-full" />
      </div>
    </div>
  );
};

export default ImageSection;
