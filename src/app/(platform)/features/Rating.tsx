import React from "react";
import { Rating as StarRating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

export const Rating = ({ reviewsCount }: { reviewsCount: number }) => {
  return (
    <div className="flex items-end justify-start space-x-2">
      <p className="text-xs">4.8</p>
      <StarRating value={5} style={{ maxWidth: 100 }} />
      <p className="text-xs text-muted-foreground">({reviewsCount} reviews)</p>
    </div>
  );
};
