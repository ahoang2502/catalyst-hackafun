import Link from "next/link";
import React from "react";
import { auth } from "@clerk/nextjs/server";

import { navbarItems } from "@/lib/constants";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  const { userId }: { userId: string | null } = auth();

  return (
    <div className="h-[50px] bg-pink-200 w-full flex items-center justify-between px-6 space-x-6 border-b-pink-300 border-b-2">
      <Logo />

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

        {!userId ? (
          <Button
            className="rounded-full border"
            size="sm"
            variant="yellow"
            asChild
          >
            <Link href="/features">Sign up</Link>
          </Button>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>
    </div>
  );
};
