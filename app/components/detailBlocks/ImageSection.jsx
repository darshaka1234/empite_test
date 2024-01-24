import React from "react";
import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="grid grid-cols-9 w-full  ">
      <div
        style={{ backgroundImage: "url(/four.png)" }}
        className="col-span-2 md:col-start-1 md:col-end-6  flex  justify-center items-center "
      >
        <Image src="/darkplay.png" width={50} height={100} alt="image4" />
      </div>
      <div className="  col-start-6 col-end-8 ">
        <Image src="/five.png" width={400} height={150} alt="image4" />
      </div>
      <div className="col-start-8 col-end-9 h-full  ">
        <Image src="/six.png" width={200} height={180} alt="image4" />
      </div>
    </div>
  );
};

export default ImageSection;
