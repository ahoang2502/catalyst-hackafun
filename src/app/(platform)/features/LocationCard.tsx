import Image from "next/image";
import React from "react";

import { Rating } from "./Rating";
import { Accessibility, LocateIcon } from "lucide-react";

export const LocationCard = ({ location }: any) => {
  const data = {
    locationName: "Location Name",
    locationAddress: "Location Address",
    locationDescription: "Location Description",
    type: "Bar",
    rating: 5,
    reviews: [],
  };

  return (
    <div className="p-4 space-y-2 flex justify-between space-x-4">
      <div className="relative size-32 rounded-lg">
        <Image src="/bar.jpg" alt="bar" fill className="rounded-xl" />
      </div>

      <div className="flex-1 space-y-1">
        <h1 className="text-sm font-bold">{location.name}</h1>
        <Rating reviewsCount={location.reviews.length} />

        <div className="flex items-center justify-start space-x-2 pt-2">
          <LocateIcon className="text-muted-foreground size-4" />
          <p className="text-xs text-muted-foreground">{location.address}</p>
        </div>

        <div className="flex items-center justify-start space-x-2">
          <Accessibility className="text-muted-foreground size-4" />
          <p className="text-xs text-muted-foreground">Wheelchair: Yes</p>
        </div>

        <div className="pt-2">
          <p className="text-xs text-slate-700">
            Venue type: {location.space_type ? location.space_type : "Bar"}
          </p>
        </div>
      </div>
    </div>
  );
};
