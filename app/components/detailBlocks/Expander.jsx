"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: "Website & Mobile App Design",
    desc: "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives.",
  },
  {
    id: 2,
    title: "Motion Graphics & Animation",
    desc: "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives.",
  },
  {
    id: 3,
    title: "User Experience",
    desc: "We’ve created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives.",
  },
];

const Expander = () => {
  const [open, setOpen] = useState({ 1: false, 2: false, 3: false });

  const toggleExpan = (id) => {
    const indi = !open[id];
    const newObj = { ...open, [id]: indi };
    setOpen(newObj);
  };

  return (
    <div className=" flex flex-col gap-5 p-5 sm:px-12 xl:p-28 justify-end">
      {data.map((i) => (
        <div key={i.id} onClick={() => toggleExpan(i.id)}>
          <div className="flex gap-3">
            {open[i.id] ? <FaMinus /> : <FaPlus />}
            <h1>{i.title}</h1>
          </div>

          {open[i.id] && <h1 className="max-w-80 py-5">{i.desc}</h1>}
        </div>
      ))}
    </div>
  );
};

export default Expander;
