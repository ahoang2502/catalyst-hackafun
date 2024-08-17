import { testimonials } from "@/lib/constants";
import Image from "next/image";
import React from "react";

export const Testimonials = () => {
  return (
    <div className="px-8 mt-8">
      <div className="h-full flex-col items-center justify-start w-full  py-2">
        <h1 className="font-bold text-2xl text-center">Testimonials</h1>

        <div className="flex items-center justify-center w-full">
          <div className="max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mt-4">
            {testimonials.map((item) => (
              <div
                className="col-span-1 p-10 bg-[#26a1da] rounded-2xl border-2 border-[#09628c]"
                key={item.name}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative size-10 rounded-full">
                    <Image
                      src={item.image}
                      alt="image"
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg ">{item.name}</h3>
                </div>

                <p className="mt-3">&quot;{item.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
