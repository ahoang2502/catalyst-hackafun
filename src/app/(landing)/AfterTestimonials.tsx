import Image from "next/image";
import React from "react";

export const AfterTestimonials = () => {
  return (
    <div className="mt-8 flex justify-center items-center">
      <div className="relative size-40">
        <Image alt="image" src="/img-1.png" fill className="object-contain"/>
      </div>
      <div className="relative size-40">
        <Image alt="image" src="/img-2.png" fill className="object-contain"/>
      </div>
      <div className="relative size-40">
        <Image alt="image" src="/img-3.png" fill className="object-contain"/>
      </div>
      <div className="relative size-40">
        <Image alt="image" src="/img-4.png" fill className="object-contain"/>
      </div>
      <div className="relative size-40">
        <Image alt="image" src="/img-5.png" fill className="object-contain"/>
      </div>
    </div>
  );
};
