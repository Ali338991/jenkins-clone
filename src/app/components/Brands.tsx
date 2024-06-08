import React from "react";

export default function Brands() {
  const heading = [
    {
      title: "Atlassian",
    },
    {
      title: "Datadog",
    },
    {
      title: "DigitalOcean",
    },
    {
      title: "Discourse",
    },
    {
      title: "Fastly",
    },
    {
      title: "IBM",
    },
    {
      title: "Netlify",
    },
    {
      title: "PagerDuty",
    },
    {
      title: "Sentry",
    },
    {
      title: "Tsinghua University",
    },
    {
      title: "XMission",
    },
  ];
  const Brand = [
    {
      image: "/cloudbees.png",
    },
    {
      image: "/osuosl.png",
    },
    {
      image: "/cdf.png",
    },
    {
      image: "/aws.png",
    },
    {
      image: "/github.png",
    },
    {
      image: "/jfrog.png",
    },
  ];
  return (
    <div>
      <h1 className="text-center py-8 font-bold mb-10">
        We thank the following organizations for their major commitments to
        support the Jenkins project.
      </h1>
      <div className="max-w-[1400px] m-auto grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6  ">
        {Brand?.map((item) => {
          return (
            <div className="flex justify-center items-center">
              <img src={item?.image} width={200} height={90}></img>
            </div>
          );
        })}
      </div>
      <h1 className="text-center py-8 font-bold">
        We thank the following organizations for their support of the Jenkins
        project through free and/or open source licensing programs.
      </h1>
      <div className="max-w-[1200px] m-auto gap-10 grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11  ">
        {heading?.map((item) => {
          return <h1 className="text-blue-700 font-bold cursor-pointer hover:underline">{item?.title}</h1>;
        })}
      </div>
    </div>
  );
}
