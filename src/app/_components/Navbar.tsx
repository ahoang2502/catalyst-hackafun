import Link from "next/link";
import React from "react";

import { navbarItems } from "@/lib/constants";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="h-[50px] bg-pink-300 w-full flex items-center justify-between px-6 space-x-6">
      <div className="flex justify-center items-center space-x-2">
        <Logo />
        <p className="text-sm">Name</p>
      </div>

      <div className="max-w-7xl w-full flex items-center justify-end space-x-4">
        <div className="min-w-[300px] flex items-center justify-between">
          {navbarItems.map((item) => (
            <div className="group" key={item.value}>
              <Link href={item.href} className="text-sm">
                {item.value}
              </Link>

              <div className="h-1 w-0 group-hover:w-full transition-all bg-[#2196cb] rounded-full" />
            </div>
          ))}
        </div>

        <Button className="rounded-full border" size="sm" variant="yellow">
          Sign up
        </Button>
      </div>
    </div>
  );
};
