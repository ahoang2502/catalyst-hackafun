import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full w-full">{children}</div>;
};

export default PlatformLayout;
