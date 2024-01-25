import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Landing from "./components/detailBlocks/Landing";
import Services from "./components/detailBlocks/Services";
import Operation from "./components/detailBlocks/Operation";
import ShowCase from "./components/detailBlocks/ShowCase";
import Capabilities from "./components/detailBlocks/Capabilities";
import Progress from "./components/detailBlocks/Progress";
import Expander from "./components/detailBlocks/Expander";
import ImageSection from "./components/detailBlocks/ImageSection";
import NumberSection from "./components/detailBlocks/NumberSection";
import Slider from "./components/detailBlocks/Slider";
import Contacts from "./components/detailBlocks/Contacts";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className=" grid  grid-cols-1 md:grid-cols-2 ">
        <Image
          src="/One.png"
          alt="image 1"
          layout="responsive"
          width={100}
          height={50}
        />
        <Landing />
        <Operation />
        <Services />
        <ShowCase />
        <Capabilities />
        <Progress />
        <Expander />
      </div>
      <ImageSection />
      <NumberSection />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className=" pl-5 sm:pl-10 md:pl-28">
          <Slider />
        </div>
        <Image
          src="/testimonial.png"
          width={100}
          height={30}
          alt="testimonial"
          layout="responsive"
          className=""
        />
      </div>
      {/* <div
        style={{ backgroundImage: "url(/full.png)" }}
        className="flex w-full justify-center items-center bg-contain  bg-no-repeat bg-slate-400  bg-center "
      >
        
      </div> */}
      <Image
        src="/full.png"
        height={50}
        width={100}
        alt="map"
        layout="responsive"
      />
      <Contacts />
      <Footer />
    </div>
  );
};

export default page;
