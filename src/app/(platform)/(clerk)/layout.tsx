import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-full w-full flex items-center justify-center">{children}</div>
    </ClerkProvider>
  );
};

export default PlatformLayout;
