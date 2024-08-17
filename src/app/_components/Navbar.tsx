import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navbarItems } from "@/lib/constants";
import { UserButton } from "@clerk/nextjs";
import { Logo } from "./Logo";
import { NavbarItems } from "./NavbarItems";

export const Navbar = () => {
  const { userId }: { userId: string | null } = auth();

  return (
    <div className="h-[50px] bg-pink-200 w-full flex items-center justify-between px-6 space-x-6 border-b-pink-300 border-b-2">
      <Logo />

      <div className="max-w-7xl w-full flex items-center justify-end space-x-4">
        <NavbarItems />

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
