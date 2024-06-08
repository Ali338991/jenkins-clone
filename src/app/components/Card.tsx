import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { title } from "process";

export default function Cards() {
  const card = [
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
    {
      image: "/Jenkins.svg",
      title:
        "Jenkins in Google Summer of Code Coummunity  Bonding,Contributors Takeaways",
      description:
        "The Community bonding period is  a period of time where the mentors and the students of the GSoC programme meet to discuss the project idea, the project scope, the project timeline, and the project mentor.",
      date: "8/06/2024",
    },
  ];

  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-2">
      {card?.map((item) => {
        return (
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <Image
             
                alt="Card background"
                className="object-cover rounded-xl"
                src="/Jenkins.svg "
                width={270}
                
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className=" cursor-pointer uppercase font-bold hover:underline text-xl ">{item?.title}</p>
              <small className="text-default-500">{item?.description}</small>
              <h4 className="font-bold text-large text-blue-700">{item?.date}</h4>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
