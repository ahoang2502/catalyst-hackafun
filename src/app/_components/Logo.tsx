import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div className="">
      <Link href="/" className="flex items-center">
        <div className="relative size-8 mr-2">
          <Image src="/logo.svg" fill alt="logo" />
        </div>

        <h3 className="font-medium text-lg">Name</h3>
      </Link>
    </div>
  );
};
