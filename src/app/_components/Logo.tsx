import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div className="size-8 relative shrink-0">
      <Link href="/" className="flex items-center justify-center">
        <Image
          src="/logo.svg"
          fill
          alt="logo"
          className="shrink-0 hover:opacity-75 transition size-8"
        />
      </Link>
    </div>
  );
};
