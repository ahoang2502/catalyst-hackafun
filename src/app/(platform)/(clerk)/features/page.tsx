import { UserButton } from "@clerk/nextjs";
import React from "react";

const FeaturesPage = () => {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/features" />
    </div>
  );
};

export default FeaturesPage;
