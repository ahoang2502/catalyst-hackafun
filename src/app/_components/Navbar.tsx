import Link from "next/link";
import React from "react";

import { navbarItems } from "@/lib/constants";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="h-[50px] w-full bg-pink-300 flex items-center justify-between px-6">
      <Logo />

      <div className="max-w-2xl xs:w-[480px] sm:w-[500px] md:w-[680px] lg:w-[700px] bg-green-500 flex justify-between">
        {navbarItems.map((item) => (
          <Link href={item.href} key={item.value} className="">
            {item.value}
          </Link>
        ))}
      </div>

      <Button>Login</Button>
    </div>
  );
};
