import Image from "next/image";
import React from "react";

const OurTeamPage = () => {
  const teamMembers = [
    {
      name: "hello",
      github: "woow",
    },
    {
      name: "hello",
      github: "ahoang2502",
    },
    {
      name: "hello",
      github: "woowow",
    },
    {
      name: "hello",
      github: "edklwek",
    },
    {
      name: "hello",
      github: "dewdewdewd",
    },
  ];

  return (
    <div className="h-full w-full flex items-center justify-center -mt-16">
      <div className="border-blue-500 border-2 rounded-3xl p-8 px-16 w-[400px] space-y-3">
        {teamMembers.map((mem) => (
          <div className="flex items-center justify-start w-full space-x-3">
            <div className="flex space-x-3 items-center">
              <div className="relative size-16">
                <Image src="/img.jpg" alt={mem.name} fill />
              </div>

              <div className="">
                <p className="font-bold">{mem.name}</p>
                <p className="">Github: {mem.github}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamPage;
