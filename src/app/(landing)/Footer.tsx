import React from "react";

import { getYear } from "@/lib/utils";

export const Footer = () => {
  return (
    <div className="mt-10 bg-purple-300 h-16 border-t-2 border-t-purple-500 flex items-center justify-center">
      <div className="">
        <small className="mb-2 text-xs block text-center">
          &copy; {getYear()} PowerpuffGirls. All rights reserved.
        </small>

        <p className="text-xs">
          <span className="font-semibold">About this website: </span>built with
          React & Next.js (App router & Server actions), Typescript,
          TailwindCSS, Framer Motion, Vercel hosting
        </p>
      </div>
    </div>
  );
};
