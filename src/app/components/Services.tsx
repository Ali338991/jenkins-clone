import React from "react";
import { FaProductHunt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Continuous Integration and Continuous Delivery",
      description:
        "As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.",
    },
    {
      title: "Continuous Integration and Continuous Delivery",
      description:
        "As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.",
    },
    {
      title: "Continuous Integration and Continuous Delivery",
      description:
        "As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.",
    },
    {
      title: "Continuous Integration and Continuous Delivery",
      description:
        "As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.",
    },
    {
      title: "Continuous Integration and Continuous Delivery",
      description:
        "As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.",
    },
    {
      title: "Continuous Integration and Continuous Delivery",
      description:
        "As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.",
    },
  ];
  return (
    <div className=" grid md:grid-cols-2 text-white pt-2  rounded-lg lg:grid-cols-3 gap-6 p-6">
      {services?.map((item) => {
        return (
          <div className="flex gap-2">
            <div className="flex justify-center items-center bg-[#168bb9] text-white min-w-[52px] rounded-full h-[52px]">
              <FaProductHunt size={20} color="white" />
            </div>
            <div>
              <h1 className="font-bold text-lg  text-black">{item?.title} </h1>
              <p className="text-black">{item?.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
