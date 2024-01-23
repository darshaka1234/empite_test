import React from "react";
import Image from "next/image";

const Services = () => {
  const data = [
    {
      title: "Custom Software",
      desc: "We create solutions that solve your business problems. Our team has a decade long success track record.",
      icon: <Image src="/computer.png" alt="computer" layout="fill" />,
    },
    {
      title: "Web Applications",
      desc: "We typically build all web applications from scratch to satisfy your requirements.",
      icon: <Image src="/bracket.png" alt="computer" layout="fill" />,
    },
    {
      title: "Mobile Applications",
      desc: "We craft better user experience and Interface designs for your digital products.",
      icon: <Image src="/weather.png" alt="computer" layout="fill" />,
    },
    {
      title: "UI / UX Design",
      desc: "We craft better user experience and Interface designs for your digital products.",
      icon: <Image src="/ux-design.png" alt="computer" layout="fill" />,
    },
  ];

  const text =
    "We are committed to keeping you ahead in today’s fast-paced and" +
    "ever-evolving world by delivering digital solutions that solve problems" +
    "in a secure, simple and effective way.";
  return (
    <div className="bg-black text-white md:pt-28 md:pr-28">
      <h1 className="">{text}</h1>
      <div className="grid grid-cols-2 gap-10 mt-12">
        {data.map((i) => {
          return (
            <div key={i.title} className="flex flex-col gap-5">
              <div key={i.title} className="relative w-10 h-10">
                <div>{i.icon}</div>
              </div>
              <h1>{i.title}</h1>
              <h1>{i.desc}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
