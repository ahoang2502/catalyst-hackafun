import Link from "next/link";
import React from "react";

import { navbarItems } from "@/lib/constants";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="h-[50px] w-full bg-pink-300 flex items-center justify-between px-6 space-x-6">
      <div className="flex justify-center items-center">
        <Logo />
        <p className="">Name</p>
      </div>

      <div className="max-w-7xl w-full flex items-center justify-end space-x-4">
        <div className="min-w-[300px] flex items-center justify-between">
          {navbarItems.map((item) => (
            <Link href={item.href} key={item.value} className="text-sm ">
              {item.value}
            </Link>
          ))}
        </div>

        <Button>Login</Button>
      </div>
    </div>
  );
};
