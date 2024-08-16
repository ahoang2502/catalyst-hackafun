import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="size-8 relative shrink-0">
      <Image
        src="/logo.svg"
        fill
        alt="logo"
        className="shrink-0 hover:opacity-75 transition"
      />
    </div>
  );
};
