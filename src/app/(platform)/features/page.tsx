import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

import { getMarkers } from "@/lib/actions/marker.actions";
import { LocationCard } from "./LocationCard";
import { ReviewCard } from "./ReviewCard";

const FeaturesPage = async () => {
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

  const data = await getMarkers();

  return (
    <div className="grid grid-cols-2 h-full ">
      <div className="mt-4 space-y-2">
        <LocationCard />
        <ReviewCard />
      </div>
      <MyMap />
    </div>
  );
};

export default FeaturesPage;
