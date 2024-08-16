import Link from "next/link";
import React from "react";

import { navbarItems } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Logo } from "@/app/_components/Logo";
import { UserButton } from "@clerk/nextjs";

export const FeaturesNavbar = () => {
  return (
    <div className="h-[50px] bg-pink-300 w-full flex items-center justify-between px-6 space-x-6 border-b-pink-400 border-b-2">
      <div className="flex justify-center items-center space-x-2">
        <Logo />
        <p className="text-sm font-medium">Name</p>
      </div>

      <div className="max-w-7xl w-full flex items-center justify-end space-x-4">
        <div className="min-w-[300px] flex items-center justify-between">
          {navbarItems.map((item) => (
            <div className="group" key={item.value}>
              <Link href={item.href} className="text-sm font-medium">
                {item.value}
              </Link>

              <div className="h-1 w-0 group-hover:w-full transition-all bg-[#2196cb] rounded-full" />
            </div>
          ))}
        </div>

          <UserButton afterSwitchSessionUrl="/"  />
      </div>
    </div>
  );
};
