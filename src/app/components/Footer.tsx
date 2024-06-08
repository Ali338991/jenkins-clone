import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiSolidError } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const footerLinks = [
    [
      {
        title: "Download",
        href: "/",
      },
      {
        title: "Blog",
        href: "/",
      },
      {
        title: "Documentation",
        href: "/",
      },
      {
        title: "Plugins",
        href: "/",
      },
      {
        title: "PlugSecurityins",
        href: "/",
      },
      {
        title: "Contributing",
        href: "/",
      },
    ],
    [
      {
        title: "Download",
        href: "/",
      },
      {
        title: "Blog",
        href: "/",
      },
      {
        title: "Documentation",
        href: "/",
      },
      {
        title: "Plugins",
        href: "/",
      },
      {
        title: "PlugSecurityins",
        href: "/",
      },
      {
        title: "Contributing",
        href: "/",
      },
    ],
    [
      {
        title: "Download",
        href: "/",
      },
      {
        title: "Blog",
        href: "/",
      },
      {
        title: "Documentation",
        href: "/",
      },
      {
        title: "Plugins",
        href: "/",
      },
      {
        title: "PlugSecurityins",
        href: "/",
      },
      {
        title: "Contributing",
        href: "/",
      },
    ],
    [
      {
        title: "Download",
        href: "/",
      },
      {
        title: "Blog",
        href: "/",
      },
      {
        title: "Documentation",
        href: "/",
      },
      {
        title: "Plugins",
        href: "/",
      },
      {
        title: "PlugSecurityins",
        href: "/",
      },
      {
        title: "Contributing",
        href: "/",
      },
    ],
  ];
  return (
    <div className=" bg-[#168bb9] py-9 ">
      <div className="max-w-[1300px] m-auto flex flex-col md:flex-row gap-4">
        <div className="max-w-[400px]">
          <div className=" flex items-center gap-2">
            <FaGithub className="mt-1" />
            <h1 className="">Improve this page</h1>
            <BiSolidError />
            <h1>Report page issue</h1>
          </div>
          <Image
            className=" mt-8"
            src="/bye.svg"
            width={100}
            height={20}
            alt="pic"
          ></Image>
          <div>
            <p className="flex flex-col   ">
              The content driving this site is licensed under the Creative
              Commons Attribution-ShareAlike 4.0 license.
            </p>
          </div>
        </div>
        <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {footerLinks?.map((item,index) => {
            return (
              <div key={index}>
                {item?.map((subitem,subIndex) => {
                  return (
                    <div key={subIndex} className="flex flex-col gap-2">
                      <Link href={subitem?.href}>
                        <h1 className="text-white hover:underline font-bold">
                          {subitem?.title}
                        </h1>
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
