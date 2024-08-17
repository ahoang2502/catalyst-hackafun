"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { navbarItems } from "@/lib/constants";

export const NavbarItems = () => {
  const pathname = usePathname();
  console.log({ pathname });

  return (
    <div className="min-w-[300px] flex items-center justify-between">
      {navbarItems.map((item) => (
        <div className="group" key={item.value}>
          <Link href={item.href} className="text-sm font-medium">
            {item.value}
          </Link>

          {pathname !== item.href && (
            <div className="h-1 w-0 group-hover:w-full transition-all bg-[#2196cb] rounded-full" />
          )}
          {pathname === item.href && (
            <div className="h-1 w-full transition-all bg-[#2196cb] rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
};
