"use client";

import Image from "next/image";
import React from "react";
import TypewriterComponent from "typewriter-effect";

export const Hero = () => {
  return (
    <div className="h-96 flex justify-center md:justify-between items-center px-3 mt-16">
      <div className="hidden md:block space-y-4">
        <h2 className="text-6xl font-medium">Hero Title</h2>

        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl font-bold">
          <TypewriterComponent
            options={{
              strings: [
                "Features 1.",
                "Feature 2.",
                "Feature 3.",
                "Feature 4.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          mollitia aut laboriosam accusamus? Alias, quam aut labore hic magnam
          repellendus reprehenderit id cum dolor non, mollitia ullam.
        </p>
      </div>

      <div className="h-full bg-orange-300 w-[500px] shrink-0 relative">
        <Image src="/cute-map.jpg" alt="hero" fill className="object-cover" />
      </div>
    </div>
  );
};
