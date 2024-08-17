import Image from "next/image";
import React from "react";

import { Rating } from "./Rating";

export const LocationCard = () => {
  const data = {
    locationName: "Location Name",
    locationAddress: "Location Address",
    locationDescription: "Location Description",
    type: "Bar",
    rating: 5,
    reviews: [],
  };
  return (
    <div className="px-2 space-y-2 flex justify-between space-x-4">
      <div className="relative size-32 rounded-lg">
        <Image src="/bar.jpg" alt="bar" fill className="rounded-xl" />
      </div>

      <div className="flex-1 space-y-1">
        <h1 className="text-sm font-bold">{data.locationName}</h1>
        <Rating />

        <p className="text-xs text-muted-foreground">{data.locationAddress}</p>
      </div>
    </div>
  );
};
