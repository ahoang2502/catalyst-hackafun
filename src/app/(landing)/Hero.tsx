"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div className="h-96 flex justify-center items-center px-3 mt-12">
        <div className="hidden md:block space-y-4 max-w-[700px]">
          <h2 className="text-7xl font-medium">FindMine</h2>

          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl font-bold">
            <TypewriterComponent
              options={{
                strings: [
                  // "Go anywhere anytime.",
                  // "Leave reviews anywhere you go.",
                  "Music is better when it's accessible.",
                  "Live music, for everyone.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="">
            Live music should be something everyone can enjoy. Right now, it's not. FindMine connects users to a map of accessible live music venues around Victoria, using authentic data.
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-sm mt-4 font-medium bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 bg-clip-text">
              Sign in to experience our newest technology
            </p>

            <div className="flex items-center justify-start space-x-3 pt-3">
              <div className="w-72 flex items-center justify-center">
                <Input
                  className="border-yellow-500 border-2 border-r-0 rounded-tr-none rounded-br-none rounded-tl-full rounded-bl-full"
                  placeholder="Search a location..."
                />
                <Search
                  className="border-2 py-2 size-10 border-yellow-500 border-l-0 rounded-tr-full rounded-br-full"
                  color="#c1c1c1"
                />
              </div>

              <Button variant="yellow" asChild className="rounded-full">
                <Link href="/sign-in">Sign me in →</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="h-full bg-orange-300 w-[500px] shrink-0 relative">
          <Image src="/cute-map.jpg" alt="hero" fill className="object-cover" />
        </div>
    </div>
  );
};
