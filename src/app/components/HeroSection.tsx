import React from "react";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 px-4 py-8">
      <div className=" hidden md:flex"></div>
      <div className=" flex  ">
        <Image src="/Jenkins.svg" height={356} width={350} alt="pic"/>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-6xl " style={{ fontStyle: "georgia" }}>
          Jenkins
        </h1>
        <h1 className="font-bold">Build great things at any scale</h1>
        <p>
          The leading open source automation server, Jenkins provides hundreds
          of plugins to support building, deploying and automating any project.
        </p>
        <p>
          {" "}
          We stand with the people of Ukraine. Please assist humanitarian
          efforts for the Ukrainian people and those affected by the military
          invasion of Ukraine by
        </p>
        <p>Ukrainian Red Cross</p>
        <div className=" flex gap-2">
          <button className=" bg-slate-200 p-2 rounded-lg text-blue-500">
            Download
          </button>
          <button className=" bg-slate-200 p-2 rounded-lg ">
            Documentation
          </button>
        </div>
      </div>
      <div className=" hidden md:flex"></div>
    </div>
  );
}
