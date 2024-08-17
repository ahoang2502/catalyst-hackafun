import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { LocationCard } from "./LocationCard";

const FeaturesPage = () => {
  const MyMap = useMemo(
    () =>
      dynamic(() => import("@/app/(platform)/features/Map"), {
        loading: () => (
          <div className="h-96 flex items-center justify-center">
            <Loader2 className="size-5 animate-spin mr-2" />
            <p>A map is loading...</p>
          </div>
        ),
        ssr: false,
      }),
    []
  );

  return (
    <div className="grid grid-cols-2 h-full ">
      <div className="mt-4">
        <LocationCard />
      </div>
      <MyMap />
    </div>
  );
};

export default FeaturesPage;
