import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="h-96 flex justify-center md:justify-between items-center px-3 mt-10">
      <div className="hidden md:block space-y-4">
        <h2 className="text-6xl font-medium">Hero Title</h2>

        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          mollitia aut laboriosam accusamus? Alias, quam aut labore hic magnam
          repellendus reprehenderit id cum dolor non, mollitia ullam. Iusto,
          odio delectus.
        </p>
      </div>

      <div className="h-full bg-orange-300 w-[500px] shrink-0 relative">
        <Image src="/cute-map.jpg" alt="hero" fill className="object-cover" />
      </div>
    </div>
  );
};
